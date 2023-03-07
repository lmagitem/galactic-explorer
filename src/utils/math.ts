import * as math from "mathjs";

export const toDecimals = (n: number, decimals: number): string =>
    (Math.round(n * 10 ** decimals) / 10 ** decimals).toFixed(decimals);

export const smoothScaleValueLog = (value: number, minVal: number, maxVal: number, newMin: number, newMax: number): number => {
    const logMin = minVal === 0 ? 0 : math.log10(math.bignumber(minVal));
    const logMax = math.log10(math.bignumber(maxVal));
    const logNum = math.log10(math.bignumber(value));
    const logScale = (logNum.sub(logMin)).div(logMax.sub(logMin));
    const result = logScale.mul((newMax - newMin) + newMin);
    return Math.max(newMin, Math.min(newMax, result.toNumber()));
}
