export enum StarLuminosityClassEnum {
    O = "O",
    Ia = "Ia",
    Ib = "Ib",
    II = "II",
    III = "III",
    IV = "IV",
    V = "V",
    VI = "VI",
    VII = "VII",
    Y = "Y",
    XNS = "XNS",
    XBH = "XBH",
}export type StarLuminosityClass = typeof StarLuminosityClassEnum | keyof typeof StarLuminosityClassEnum;
