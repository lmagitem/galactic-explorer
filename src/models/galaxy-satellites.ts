export enum GalaxySatellitesEnum {
  /// This galaxy has much more satellites than expected for its type.
  MuchMore = "MuchMore",
  /// This galaxy has more satellites than expected for its type.
  // #[default]
  More = "More",
  /// This galaxy has less satellites than expected for its type.
  Less = "Less",
  /// This galaxy has much less satellites than expected for its type.
  MuchLess = "MuchLess",
  /// This galaxy has no satellites whatsoever.
  None = "None",
  /// This galaxy has one or multiple very special satellites.
  Special = "Special",
}
export type GalaxySatellites = keyof typeof GalaxySatellitesEnum | keyof GalaxySatellitesEnum;
