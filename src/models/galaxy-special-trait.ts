import { GalaxySatellites } from "./galaxy-satellites";

export interface GalaxySpecialTraitInterface {
  /// This galaxy's stars are much more densely packed than those in galaxies of similar type. The associated number represents the
  /// percentage of density this galaxy has when compared with a standard galaxy of the same type.
  Compact?: number;
  /// This galaxy's stars are much less densely packed than those in galaxies of similar type. The associated number represents the
  /// percentage of density this galaxy has when compared with a standard galaxy of the same type.
  Expansive?: number;
  /// Satellites of galaxies are common, but this galaxy has a noticeable variation when compared to other ones.
  Satellites?: GalaxySatellites;
  /// This galaxy is less massive than expected for one of its type. The associated number represents that difference as a percentage.
  SubSize?: number;
  /// This galaxy is more massive than expected for one of its type. The associated number represents that difference as a percentage.
  SuperSize?: number;
}
export enum GalaxySpecialTraitEnum {
  /// This galaxy has the exact traits that one might expect for a member of its type and subtype.
  // #[default]
  NoPeculiarity = "NoPeculiarity",
  /// This galaxy has a massive central black hole that produces a much-higher-than-normal luminosity over at least some portion of the
  /// electromagnetic spectrum. Jets of plasma emit from the core that extend for thousands of parsecs.
  ActiveNucleus = "ActiveNucleus",
  /// This galaxy is made of two previous galaxies merging together and currently has two massive central black holes dancing together
  /// until they merge in a few hundred of millions of years. Both black holes emit greater than typical luminosity across much of the
  /// electromagnetic spectrum and emit jets of plasma thousands of parsecs long.
  DoubleNuclei = "DoubleNuclei",
  /// This galaxy has a sizeable stellar population outside the core and disk/ellipse, often with large numbers of globular clusters.
  ExtendedHalo = "ExtendedHalo",
  /// This galaxy's stars have lower metallicity than expected in a standard galaxy of the same type.
  MetalPoor = "MetalPoor",
  /// This galaxy's stars have higher metallicity than expected in a standard galaxy of the same type.
  Dusty = "Dusty",
  /// This galaxy has much less gas than other galaxies, which gives it a slower star formation rate.
  GasPoor = "GasPoor",
  /// This galaxy has much more gas than other galaxies, which gives it a much faster star formation rate.
  GasRich = "GasRich",
  /// This galaxy experiences very high star formation rates. It is ofter due to intaractions with one or more other galaxies.
  Starburst = "Starburst",
  /// This galaxy has runned out of the cold hydrogen gas needed to make stars earlier than it should have. It might be the result of an
  /// active nucleus that is heating the galaxy's gas or expelling it, or the gas being heated by other means.
  Dead = "Dead",
  /// This galaxy has lost too much of its gas while interacting with other galaxies and is no longer able to produce new stars.
  Dormant = "Dormant",
  /// This galaxy is close enough one or multiple other galaxies for their gravity to distort each others. As a result, star formation
  /// rates and extragalactic star populations are greater than normal.
  Interacting = "Interacting",
  /// This galaxy interacted with another one "recently" and has some kind of tail of gas and stars as a result.
  Tail = "Tail",
  /// This galaxy is not very old and has a larger population of hot bright stars.
  Younger = "Younger",
  /// This galaxy is very old, which means that it has slowed or even stopped star formation long ago and has older stellar populations.
  Older = "Older",
}
export type GalaxySpecialTrait =
  | keyof typeof GalaxySpecialTraitEnum
  | typeof GalaxySpecialTraitEnum
  | GalaxySpecialTraitInterface;
