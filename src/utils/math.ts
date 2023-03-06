export const toDecimals = (n: number, decimals: number): string =>
    (Math.round(n * 10 ** decimals) / 10 ** decimals).toFixed(decimals);
