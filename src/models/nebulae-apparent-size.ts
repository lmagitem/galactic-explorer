export enum NebulaeApparentSizeEnum {
  Tiny = "Tiny",
  Small = "Small",
  Large = "Large",
  Dominant = "Dominant",
}
export type NebulaeApparentSize = keyof typeof NebulaeApparentSizeEnum | keyof NebulaeApparentSizeEnum;
