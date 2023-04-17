export interface StellarNeighborhoodAgeInterface {
  /// Young neighborhoods begin as open clusters whose stars drift apart over millions of years. They are often still surrounded by the
  /// nebula from which they formed. Most stars in these clusters are of the same age. The associated number is the actual age of the
  /// neighborhood in millions of years.
  Young?: number;
  /// Star formation in old neighborhoods is minimal, and has been so for a long time. The associated number is the actual age of the
  /// neighborhood in millions of years.
  Old?: number;
  /// Ancient stars were the first generations to be born. No star formation has occured in these neighborhoods since a very long time.
  /// The associated number is the actual age of the neighborhood in millions of years.
  Ancient?: number;
}
export enum StellarNeighborhoodAgeEnum {
  /// Mixed populations of mostly main sequence stars of varying ages and types.
  Mature = "Mature",
}
export type StellarNeighborhoodAge =
  | keyof typeof StellarNeighborhoodAgeEnum
  | typeof StellarNeighborhoodAgeEnum
  | StellarNeighborhoodAgeInterface;
