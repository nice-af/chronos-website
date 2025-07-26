import { defineEventHandler, readBody, setResponseStatus } from 'h3';

interface GetOauthTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: 'Bearer';
}

interface GetOauthTokenErrorResponse {
  error: string;
  error_description: string;
}

export default defineEventHandler(async event => {
  const body = await readBody(event);

  if (
    !body.grant_type ||
    (body.grant_type === 'authorization_code' && !body.code) ||
    (body.grant_type === 'refresh_token' && !body.refresh_token)
  ) {
    setResponseStatus(event, 400);
    return { error: 'Invalid request', error_description: 'Missing required parameters' };
  }

  const payload: Record<string, string> = {
    grant_type: body.grant_type,
    client_id: process.env.JIRA_CLIENT_ID!,
    client_secret: process.env.JIRA_SECRET!,
  };

  if (body.grant_type === 'authorization_code') {
    payload.code = body.code;
    payload.redirect_uri = process.env.APP_OAUTH_REDIRECT_URI!;
  } else if (body.grant_type === 'refresh_token') {
    payload.refresh_token = body.refresh_token;
  }

  try {
    const response = await $fetch<GetOauthTokenResponse | GetOauthTokenErrorResponse>(
      'https://auth.atlassian.com/oauth/token',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      }
    );

    if ('error' in response) {
      setResponseStatus(event, 400);
      return response;
    }

    return response;
  } catch (error: unknown) {
    setResponseStatus(event, 500);
    return { error: 'Internal Server Error', error_description: (error as Error).message };
  }
});
