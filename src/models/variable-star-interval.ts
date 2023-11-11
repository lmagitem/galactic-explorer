export enum VariableStarIntervalEnum {
  Minutes = "Minutes",
  Hours = "Hours",
  Days = "Days",
  Months = "Months",
  Years = "Years",
  Decades = "Decades",
  Centuries = "Centuries",
}
export type VariableStarInterval = keyof typeof VariableStarIntervalEnum | keyof VariableStarIntervalEnum;
