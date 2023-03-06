export enum AstronomicalObject {
    Void = "Void",
    Star = "Star",
}
export type AstronomicalObjectType =
    | AstronomicalObject.Void
    | AstronomicalObject.Star;

export type VoidDTO = "Void";
export const isVoidDTO = (obj: any): boolean => obj === "Void";
