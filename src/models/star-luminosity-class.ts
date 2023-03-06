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
}

export type StarLuminosityClass =
| StarLuminosityClassEnum.O
| StarLuminosityClassEnum.Ia
| StarLuminosityClassEnum.Ib
| StarLuminosityClassEnum.II
| StarLuminosityClassEnum.III
| StarLuminosityClassEnum.IV
| StarLuminosityClassEnum.V
| StarLuminosityClassEnum.VI
| StarLuminosityClassEnum.VII
| StarLuminosityClassEnum.Y
| StarLuminosityClassEnum.XNS
| StarLuminosityClassEnum.XBH
| keyof typeof StarLuminosityClassEnum;
