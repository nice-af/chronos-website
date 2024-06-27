export interface CardsSelectionOption<T> {
  label: string;
  value: T;
  image: { src: string; srcset: string; width: number; height: number };
}

export interface CardsSelectionProps<T> {
  label: string;
  options: CardsSelectionOption<T>[];
  value: string;
}

export type CardsSelectionEmits<T> = {
  change: [value: T];
};
