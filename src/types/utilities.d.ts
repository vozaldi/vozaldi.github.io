export type ValueOf<T> = T[keyof T];

/**
 * Allow wild card values in a string type
 * 
 * @example
 * type MyString = 'active' | 'inactive' | WildCardString;
 * const myString: MyString = 'active';
 * const anotherString: MyString = 'anything-else'; // wild card value
 */
export type WildCardString = string & {};

export type ErrorState<F> = {
  fields?: Array<keyof F>;
  message?: string;
};

export type LayoutRectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
  element?: HTMLElement;
};

export type ContentLayoutState = {
  [key: string]: Partial<LayoutRectangle>;
};

export type LayoutObject = ContentLayoutState;

export type AbortControllerRef = {
  [key: string]: AbortController;
};

export type BaseProps<T = HTMLDivElement> = React.HTMLAttributes<T>;
