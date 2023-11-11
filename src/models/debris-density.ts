export enum DebrisDensityEnum {
  MuchLower = "MuchLower",
  Lower = "Lower",
  Higher = "Higher",
  MuchHigher = "MuchHigher",
}
export type DebrisDensity = keyof typeof DebrisDensityEnum | keyof DebrisDensityEnum;
