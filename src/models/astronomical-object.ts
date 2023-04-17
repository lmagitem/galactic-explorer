export enum AstronomicalObject {
  Void = "Void",
  Star = "Star",
}
export type AstronomicalObjectType = typeof AstronomicalObject | keyof typeof AstronomicalObject;

export type VoidDTO = "Void";
export const isVoidDTO = (obj: any): boolean => obj === "Void";
