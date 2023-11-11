export enum CelestialRingLevelEnum {
  /// A ring so thin or parse that one must search it in order to see it.
  Unnoticeable = "Unnoticeable",
  /// A ring that is visible from up close or with a powerful telescope.
  Noticeable = "Noticeable",
  /// A ring that is visible from anywhere in the star system when looking with an at least moderately powerful telescope.
  Visible = "Visible",
  /// A ring that is easily visible, like Saturn's, even in small telescopes, from anywhere in the system.
  Spectacular = "Spectacular",
}
export type CelestialRingLevel = keyof typeof CelestialRingLevelEnum | keyof CelestialRingLevelEnum;
