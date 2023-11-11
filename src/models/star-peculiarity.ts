import { RotationAnomalySpeed } from "./rotation-anomaly-speed";
import { StarAgeDifference } from "./star-age-difference";
import { StarMetallicityDifference } from "./star-metallicity-difference";
import { VariableStarInterval } from "./variable-star-interval";

export interface StarPeculiarityInterface {
  /// The star is of a different age than the other ones in this region.
  AgeDifference?: StarAgeDifference;
  /// The star rotates at an unusual speed, which has an impact on its system and lifespan.
  RotationAnomaly?: RotationAnomalySpeed;
  /// The star has an unusual metallicity (the abundance of elements heavier than hydrogen and
  /// helium in its composition) for its region.
  UnusualMetallicity?: StarMetallicityDifference;
  /// The star is one whose brightness or magnitude changes over time. The reasons could cause a
  /// lot of radiations, and depending on the interval, changes in stellar brightness could be
  /// very bad for its planets' climate and habitability. If the behavior is predictable and
  /// regular it can make the star a very useful astronomical "beacon" for systems in this
  /// region of the galaxy.
  VariableStar?: VariableStarInterval;
}
export enum StarPeculiarityEnum {
  /// The star seems perfectly standard for its size and type.
  NoPeculiarity = "NoPeculiarity",
  /// All planets, stars and other objects around this star are variably aligned to the ecliptic
  /// plane.
  ChaoticOrbits = "ChaoticOrbits",
  /// The star emits excessive radiations, affecting the habitability and atmospheres of the
  /// planets orbiting it.
  ExcessiveRadiation = "ExcessiveRadiation",
  /// The star emits very powerful stellar winds which shortens its lifespan. Also has a
  /// detrimental effect on the atmospheres of planets that haven't strong enough, and on planets
  /// habitability (as stellar winds cause radiation).
  PowerfulStellarWinds = "PowerfulStellarWinds",
  /// The star has a strong magnetic field, which is often correlated with stronger stellar winds,
  /// bigger and more frequent solar flares and stellar anomalies. Those points have a detrimental
  /// effect on habitability and planets atmospheres. The magnetic field might also interact with
  /// planets magnetic fields and lead to intense aurora and radiation belts.
  StrongMagneticField = "StrongMagneticField",
  /// The planetary formation around this star wasn't very successful. As a result, the star is
  /// still orbited by a dust-rich circumstellar disk.
  CircumstellarDisk = "CircumstellarDisk",
}
export type StarPeculiarity =
  | keyof typeof StarPeculiarityEnum
  | typeof StarPeculiarityEnum
  | StarPeculiarityInterface;
