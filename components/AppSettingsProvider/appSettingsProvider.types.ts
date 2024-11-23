import type { InjectionKey, Ref } from 'vue';

export type OS = 'macos' | 'windows' | 'linux';
export type ThemeColor = 'light' | 'dark';
export type SidebarLayout = 'normal' | 'compact' | 'micro';

interface ProvidedRef<T> {
  ref: Ref<T>;
  setValue: (value: T) => void;
}

export const systemThemeProvider = Symbol() as InjectionKey<ProvidedRef<ThemeColor>>;
export const appOSProvider = Symbol() as InjectionKey<ProvidedRef<OS>>;
export const appThemeProvider = Symbol() as InjectionKey<ProvidedRef<ThemeColor>>;
export const appSidebarLayoutProvider = Symbol() as InjectionKey<ProvidedRef<SidebarLayout>>;
