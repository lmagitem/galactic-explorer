export enum StelliferousEraEnum {
  /// A period between the Primordial and Stelliferous eras. With the birth and death of the first Population III stars, the first
  /// mini-galaxies and Population II stars begin to appear alongside elements heavier than helium. Galaxies allow small bubbles of
  /// ionized gas to exist and expand, but most of the universe is still made of an extremely dense and opaque neutral hydrogen cloud
  /// which would make impossible to see outside of one's galaxy.
  AncientStelliferous = "AncientStelliferous",
  /// The majority of the universe reionizes more or less 1 billion years after the Big Bang, light can now travel freely across the
  /// whole universe. The mini-galaxies created previously begin to merge and form mature galaxies, which may interact with each others
  /// by colliding, being engulfed, etc. The first Population I stars appear, which contain heavier elements and are more likely to be
  /// accompanied by planets.
  EarlyStelliferous = "EarlyStelliferous",
  /// The part of the Stelliferous era we live in. There is a wide range of galaxies consisting of a wide range of stars.
  MiddleStelliferous = "MiddleStelliferous",
  /// Local galactic groups will have merged into single giant galaxies. All galaxies outside of one's own cluster will disappear below
  /// the cosmological horizon - the only things that a member of a galaxy will be able to see are the stars and objects within its own
  /// galaxy. As the Late Stelliferous progresses, the general luminosity of galaxies will also diminish as the less massive red dwarfs
  /// begin to die as white dwarfs.
  LateStelliferous = "LateStelliferous",
  /// All other galaxies outside one's own will no longer be detectable by any means. As this era progresses, stars will exhaust their
  /// fuel and cool off. All stars not massive enough to become a neutron star or a black hole will turn into white dwarfs and slowly cool
  /// until they're black dwarfs. By the end of the End Stelliferous, all stars will have burned out and star formation will end.
  EndStelliferous = "EndStelliferous",
}
export type StelliferousEra = typeof StelliferousEraEnum | keyof typeof StelliferousEraEnum;
