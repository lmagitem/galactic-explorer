import { StelliferousEra } from "./stelliferous-era";

export interface Universe {
  /// In which part of the Stelliferous Era the universe is currently.
  era: StelliferousEra;
  /// The time passed since the big bang, in billions of years.
  // #[default = 13.8]
  age: number;
}
