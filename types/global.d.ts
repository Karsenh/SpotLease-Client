declare type Nullable<T> = T | null;

declare function vp(size: number): number;

type ArrItem<T> = T extends null | undefined ? never : T;
declare type ArrayElement<Arr> = ArrItem<Arr>[number];
