export interface TabsOption<T> {
  label: string;
  value: T;
  iconUrl?: string;
}

export interface TabsProps<T> {
  options: TabsOption<T>[];
  value: string;
}

export type TabsEmits<T> = {
  change: [value: T];
};
