export enum CelestialBodyCompositionEnum {
  Metallic = "Metallic",
  Rocky = "Rocky",
  Gaseous = "Gaseous",
  Icy = "Icy",
}
export type CelestialBodyComposition = keyof typeof CelestialBodyCompositionEnum | keyof CelestialBodyCompositionEnum;
