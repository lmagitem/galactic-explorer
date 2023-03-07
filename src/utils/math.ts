import * as math from "mathjs";

export const toDecimals = (n: number, decimals: number): string =>
    (Math.round(n * 10 ** decimals) / 10 ** decimals).toFixed(decimals);

export const calculateLogWithMinAndMax = (n: number, minVal: number, maxVal: number, minLogVal: number, maxLogVal: number): number => {
    const logMin = minVal === 0 ? 0 : math.log10(math.bignumber(minVal));
    const logMax = math.log10(math.bignumber(maxVal));
    const logNum = math.log10(math.bignumber(n));
    const logScale = (logNum.sub(logMin)).div(logMax.sub(logMin));
    const result = logScale.mul((maxLogVal - minLogVal) + minLogVal);
    return Math.max(minLogVal, Math.min(maxLogVal, result.toNumber()));
}
