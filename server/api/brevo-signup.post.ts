import { defineEventHandler, readBody } from 'h3';
import brevo, { ContactsApiApiKeys, ErrorModel, HttpError } from '@getbrevo/brevo';
import { useRuntimeConfig } from '#imports';

export default defineEventHandler(async event => {
  const body = await readBody(event);

  if (!body?.email || typeof body.email !== 'string') {
    return {
      success: false,
      code: 'missing_parameter' as const,
      message: 'Email is required.',
    } as const;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email as string)) {
    return {
      success: false,
      code: 'invalid_email' as const,
      message: 'Please provide a valid email address.',
    } as const;
  }

  const config = useRuntimeConfig();

  const brevoClient = new brevo.ContactsApi();
  brevoClient.setApiKey(ContactsApiApiKeys.apiKey, String(config.BREVO_API_KEY));

  // Process the body data here
  // For example, you can log the body data
  let res;
  try {
    res = await brevoClient.createDoiContact({
      email: body.email,
      includeListIds: [Number(config.BREVO_LIST_ID)],
      templateId: 1,
      redirectionUrl: config.BREVO_REDIRECTION_URL,
    });
  } catch (error) {
    if (error instanceof HttpError) {
      // Map Brevo error codes to more user-friendly codes
      const brevoCode = error.body?.code as ErrorModel.CodeEnum;
      let userCode: string;

      switch (brevoCode) {
        case ErrorModel.CodeEnum.DuplicateParameter:
          userCode = 'duplicate_parameter';
          break;
        case ErrorModel.CodeEnum.InvalidParameter:
          userCode = 'invalid_parameter';
          break;
        case ErrorModel.CodeEnum.MissingParameter:
          userCode = 'missing_parameter';
          break;
        case ErrorModel.CodeEnum.Unauthorized:
          userCode = 'unauthorized';
          break;
        default:
          userCode = 'badRequest';
      }

      return {
        success: false,
        code: userCode,
        message: error.body?.message as string,
      } as const;
    } else {
      return {
        success: false,
        code: 'badRequest' as const,
        message: 'Bad request. Please try again later.',
      } as const;
    }
  }

  return {
    success: true,
    data: res.body,
  } as const;
});
