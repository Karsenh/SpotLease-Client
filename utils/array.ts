export const createArray = (length: number): number[] => {
  return Array.from({length}, (_, index) => index);
};
