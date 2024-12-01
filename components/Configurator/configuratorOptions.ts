import type { OS, SidebarLayout } from '~/components/AppSettingsProvider/appSettingsProvider.types';
import type { CardsSelectionOption } from '~/components/CardsSelection/cardsSelection.types';
import type { TabsOption } from '~/components/Tabs/tabs.types';

const urlPrefix = '/assets/images/settings';
const defaultImageProps = { width: 74, height: 46 };

export const osOptions: TabsOption<OS>[] = [
  { label: 'Mac', value: 'macos', iconUrl: '/assets/images/icon-macos.svg' },
  { label: 'Windows', value: 'windows', iconUrl: '/assets/images/icon-windows.svg' },
  { label: 'Linux', value: 'linux', iconUrl: '/assets/images/icon-linux.svg' },
];

export type ThemeOptionsValue = 'light' | 'dark' | 'system';

export const themeOptions: CardsSelectionOption<ThemeOptionsValue>[] = [
  {
    label: 'Light',
    value: 'light',
    image: {
      src: `${urlPrefix}/theme-light.png`,
      srcset: `${urlPrefix}/theme-light@2x.png 2x, ${urlPrefix}/theme-light@3x.png 3x`,
      ...defaultImageProps,
    },
  },
  {
    label: 'Dark',
    value: 'dark',
    image: {
      src: `${urlPrefix}/theme-dark.png`,
      srcset: `${urlPrefix}/theme-dark@2x.png 2x, ${urlPrefix}/theme-dark@3x.png 3x`,
      ...defaultImageProps,
    },
  },
  {
    label: 'System',
    value: 'system',
    image: {
      src: `${urlPrefix}/theme-system.png`,
      srcset: `${urlPrefix}/theme-system@2x.png 2x, ${urlPrefix}/theme-system@3x.png 3x`,
      ...defaultImageProps,
    },
  },
];

export const sidebarLayoutOptions: CardsSelectionOption<SidebarLayout>[] = [
  {
    label: 'Normal',
    value: 'normal',
    image: {
      src: `${urlPrefix}/layout-normal-dark.png`,
      srcset: `${urlPrefix}/layout-normal-dark@2x.png 2x, ${urlPrefix}/layout-normal-dark@3x.png 3x`,
      ...defaultImageProps,
    },
    imageLight: {
      src: `${urlPrefix}/layout-normal-light.png`,
      srcset: `${urlPrefix}/layout-normal-light@2x.png 2x, ${urlPrefix}/layout-normal-light@3x.png 3x`,
      ...defaultImageProps,
    },
  },
  {
    label: 'Compact',
    value: 'compact',
    image: {
      src: `${urlPrefix}/layout-compact-dark.png`,
      srcset: `${urlPrefix}/layout-compact-dark@2x.png 2x, ${urlPrefix}/layout-compact-dark@3x.png 3x`,
      ...defaultImageProps,
    },
    imageLight: {
      src: `${urlPrefix}/layout-compact-light.png`,
      srcset: `${urlPrefix}/layout-compact-light@2x.png 2x, ${urlPrefix}/layout-compact-light@3x.png 3x`,
      ...defaultImageProps,
    },
  },
  {
    label: 'Micro',
    value: 'micro',
    image: {
      src: `${urlPrefix}/layout-micro-dark.png`,
      srcset: `${urlPrefix}/layout-micro-dark@2x.png 2x, ${urlPrefix}/layout-micro-dark@3x.png 3x`,
      ...defaultImageProps,
    },
    imageLight: {
      src: `${urlPrefix}/layout-micro-light.png`,
      srcset: `${urlPrefix}/layout-micro-light@2x.png 2x, ${urlPrefix}/layout-micro-light@3x.png 3x`,
      ...defaultImageProps,
    },
  },
];
