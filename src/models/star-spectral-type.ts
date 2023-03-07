export enum StarSpectralTypeEnum {
    WR = "WR",
    O = "O",
    B = "B",
    A = "A",
    F = "F",
    G = "G",
    K = "K",
    M = "M",
    L = "L",
    T = "T",
    Y = "Y",
    DA = "DA",
    DB = "DB",
    DC = "DC",
    DO = "DO",
    DZ = "DZ",
    DQ = "DQ",
    DX = "DX",
    XNS = "XNS",
    XBH = "XBH",
}
export type StarSpectralType = typeof StarSpectralTypeEnum | keyof typeof StarSpectralTypeEnum;

export const isStarSpectralType = (obj: any): boolean =>
    (obj as StarSpectralType) === StarSpectralTypeEnum.WR
    || (obj as StarSpectralType) === StarSpectralTypeEnum.O
    || (obj as StarSpectralType) === StarSpectralTypeEnum.B
    || (obj as StarSpectralType) === StarSpectralTypeEnum.A
    || (obj as StarSpectralType) === StarSpectralTypeEnum.F
    || (obj as StarSpectralType) === StarSpectralTypeEnum.G
    || (obj as StarSpectralType) === StarSpectralTypeEnum.K
    || (obj as StarSpectralType) === StarSpectralTypeEnum.M
    || (obj as StarSpectralType) === StarSpectralTypeEnum.L
    || (obj as StarSpectralType) === StarSpectralTypeEnum.T
    || (obj as StarSpectralType) === StarSpectralTypeEnum.Y
    || (obj as StarSpectralType) === StarSpectralTypeEnum.DA
    || (obj as StarSpectralType) === StarSpectralTypeEnum.DB
    || (obj as StarSpectralType) === StarSpectralTypeEnum.DC
    || (obj as StarSpectralType) === StarSpectralTypeEnum.DO
    || (obj as StarSpectralType) === StarSpectralTypeEnum.DZ
    || (obj as StarSpectralType) === StarSpectralTypeEnum.DQ
    || (obj as StarSpectralType) === StarSpectralTypeEnum.DX
    || (obj as StarSpectralType) === StarSpectralTypeEnum.XNS
    || (obj as StarSpectralType) === StarSpectralTypeEnum.XBH;

export interface StarSpectralTypeDTO {
    WR?: number;
    O?: number;
    B?: number;
    A?: number;
    F?: number;
    G?: number;
    K?: number;
    M?: number;
    L?: number;
    T?: number;
    Y?: number;
}
export const isStarSpectralTypeDTO = (obj: any): boolean =>
    (obj as StarSpectralTypeDTO)?.WR !== undefined
    || (obj as StarSpectralTypeDTO)?.O !== undefined
    || (obj as StarSpectralTypeDTO)?.B !== undefined
    || (obj as StarSpectralTypeDTO)?.A !== undefined
    || (obj as StarSpectralTypeDTO)?.F !== undefined
    || (obj as StarSpectralTypeDTO)?.G !== undefined
    || (obj as StarSpectralTypeDTO)?.K !== undefined
    || (obj as StarSpectralTypeDTO)?.M !== undefined
    || (obj as StarSpectralTypeDTO)?.L !== undefined
    || (obj as StarSpectralTypeDTO)?.T !== undefined
    || (obj as StarSpectralTypeDTO)?.Y !== undefined;
