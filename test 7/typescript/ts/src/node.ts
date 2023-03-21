export const activFunction = (val: number): number =>
    (1 / (1 + (Math.exp(-1 * val))))