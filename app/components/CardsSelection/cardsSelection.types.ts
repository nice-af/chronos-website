type Image = { src: string; srcset: string; width: number; height: number };

export interface CardsSelectionOption<T> {
  label: string;
  value: T;
  image: Image;
  /**
   * Optional image to show when the selected app theme is light
   */
  imageLight?: Image;
}

export interface CardsSelectionProps<T> {
  label: string;
  options: CardsSelectionOption<T>[];
  modelValue: T;
  isLight?: boolean;
}

export type CardsSelectionEmits<T> = {
  (e: 'update:modelValue', value: T): void;
};
