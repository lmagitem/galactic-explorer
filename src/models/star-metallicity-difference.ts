export enum StarMetallicityDifferenceEnum {
  /// The star is probably made almost entirely of hydrogen and helium. It is from a Population
  /// two levels lower than its neighbors.
  MuchLower = "MuchLower",
  /// The star has a higher hydrogen and helium composition than expected. It is from a Population
  /// one level lower than its neighbors.
  // #[default]
  Lower = "Lower",
  /// The star has a lower hydrogen and helium composition than expected. It is from a Population
  /// one level higher than its neighbors and probably comes from an interstellar gas enriched by
  /// many previous generations of stars. It will be more likely to have planets.
  Higher = "Higher",
  /// The star is exceptionally metal-rich for its neighborhood. It is from a Population two
  /// levels higher than its neighbors and probably formed in a place with a history of intense
  /// star formation and supernova activity. It will be far more likely to have planets, with a
  /// diverse and rich composition.
  MuchHigher = "MuchHigher",
}
export type StarMetallicityDifference = keyof typeof StarMetallicityDifferenceEnum | keyof StarMetallicityDifferenceEnum;
