export enum CataclysmSeverityEnum {
  Minor = "Minor",
  Major = "Major",
  Extreme = "Extreme",
  Ultimate = "Ultimate",
}
export type CataclysmSeverity = keyof typeof CataclysmSeverityEnum | keyof CataclysmSeverityEnum;
