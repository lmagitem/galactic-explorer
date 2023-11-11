export enum CelestialRingCompositionEnum {
  Ice = "Ice",
  Rock = "Rock",
  Metal = "Metal",
  Dust = "Dust",
}
export type CelestialRingComposition = keyof typeof CelestialRingCompositionEnum | keyof CelestialRingCompositionEnum;
