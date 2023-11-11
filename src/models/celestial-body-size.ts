export enum CelestialBodySizeEnum {
  /// Bodies at least halfway through being massive enough to sustain deuterium fusion in their core.
  Hypergiant = "Hypergiant",
  /// A world whose size is akin Jupiter's size.
  Supergiant = "Supergiant",
  /// A world large enough to retain hydrogen.
  Giant = "Giant",
  /// A world large enough to retain helium gas.
  Large = "Large",
  /// A world large enough to retain water vapor in its atmosphere.
  Standard = "Standard",
  /// A world large enough to retain molecular nitrogen. Titan and Mars lie within this category.
  Small = "Small",
  /// A world too small to retain significant atmosphere, think of bodies like Mercury, the Moon, Callisto, Europa, Io...
  Tiny = "Tiny",
  /// A body that isn't big enough for its self-gravity to overcome rigid body forces and assume an ellipsoidal shape in equilibrium.
  Moonlet = "Moonlet",
}
export type CelestialBodySize = keyof typeof CelestialBodySizeEnum | keyof CelestialBodySizeEnum;
