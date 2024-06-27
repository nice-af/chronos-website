export type OS = 'macos' | 'windows' | 'linux';
export type ThemeColor = 'light' | 'dark';
export type SidebarLayout = 'normal' | 'compact' | 'micro';

export const systemThemeProvider = Symbol() as InjectionKey<Ref<ThemeColor>>;
export const appOSProvider = Symbol() as InjectionKey<Ref<OS>>;
export const appThemeProvider = Symbol() as InjectionKey<Ref<ThemeColor>>;
export const appSidebarLayoutProvider = Symbol() as InjectionKey<Ref<SidebarLayout>>;
