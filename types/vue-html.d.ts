import '@vue/runtime-core';
import '@vue/runtime-dom';

// For vue components
declare module '@vue/runtime-core' {
  export interface AllowedComponentProps {
    // Allow any data-* attr
    [key: `data-${string}`]: string | undefined;
    [key: `aria-${string}`]: string | undefined;
    tabindex?: number | string;
    id?: string;
    hidden?: boolean;
  }
}

// For native html elements
declare module '@vue/runtime-dom' {
  export interface HTMLAttributes {
    // Allow any data-* attr
    [key: `data-${string}`]: string | undefined;
    [key: `aria-${string}`]: string | undefined;
    slot?: string;
  }
}

export {};
