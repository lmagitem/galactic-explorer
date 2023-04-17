export interface GalacticNeighborhoodDensity {
  /// The emptiest parts of the universe, covers a diameter far greater than the other densities. Contains 0 to 3 major galaxies stored in
  /// the first associated value and a certain number of minor ones stored in the second value.
  Void?: [number, number];
  /// A zone filled with a "regular" amount of galaxies. Contains 1 to 5 major galaxies stored in the first associated value and a certain
  /// number of minor ones stored in the second value.
  // #[default]
  Group?: [number, number];
  /// The most crowded parts of the universe. Galaxies within this neighborhood usualy revolve around a huge dominant one. Space between
  /// galaxies is filled with super-hot plasma and a large number of intergalactic stars. Contains 5 to 20+ major galaxies. Thje first
  /// associated value is the number of dominant, the second value the number of major and the third the number of minor galaxies.
  Cluster?: [number, number, number];
}
