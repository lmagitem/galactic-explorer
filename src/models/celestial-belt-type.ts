export enum CelestialBeltTypeEnum {
  // Metallics
  Dust = "Dust",
  Meteoroid = "Meteoroid",
  Ore = "Ore",
  // Rocky
  Debris = "Debris",
  Asteroid = "Asteroid",
  Ash = "Ash",
  // Icy
  Frost = "Frost",
  Comet = "Comet",
  // Gaseous
  GasBelt = "GasBelt",
}
export type CelestialBeltType = keyof typeof CelestialBeltTypeEnum | keyof CelestialBeltTypeEnum;
