import { CataclysmSeverity } from "./cataclysm-severity";
import { DebrisDensity } from "./debris-density";
import { NebulaeApparentSize } from "./nebulae-apparent-size";

export interface SystemPeculiarityInterface {
  /// A very unusual and destructive event drastically affected the system in its past.
  Cataclysm?: CataclysmSeverity;
  /// In this system is found an unusual mass level of ice, dust and planetesimals.
  UnusualDebrisDensity?: DebrisDensity;
  /// This system is located within or in close proximity to a nebula, a vast region of
  /// interstellar gas and dust. Nebulae can be remnants of dead stars, birthplaces of new stars,
  /// or simply cold, dark clouds in space. The system might experience a diffuse glow from the
  /// illuminated gas and dust, creating a visually stunning backdrop. If the nebula is a region
  /// of active star formation, the system could be exposed to higher levels of radiation from
  /// nearby young, massive stars.
  Nebulae?: NebulaeApparentSize;
}
export enum SystemPeculiarityEnum {
  /// The system seems perfectly standard.
  NoPeculiarity = "NoPeculiarity",
  /// Carbon-rich systems are ones where the protoplanetary disk was made with a higher
  /// carbon/oxygen ratio during formation, producing carbon planets instead of rocky ones, and
  /// where ice planets would be more likely to be made with ammonia, methane or carbon monoxide
  /// than water.
  CarbonRich = "CarbonRich",
}
export type SystemPeculiarity =
  | keyof typeof SystemPeculiarityEnum
  | typeof SystemPeculiarityEnum
  | SystemPeculiarityInterface;
