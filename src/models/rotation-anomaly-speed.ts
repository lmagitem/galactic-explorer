export enum RotationAnomalySpeedEnum {
  /// If the star has a high mass, it'll have a longer lifespan. It also has a much weaker
  /// magnetic field because of its abnormal speed, which means less protection for the star's
  /// planets from cosmic rays and interstellar radiation. It also has reduced stellar winds,
  /// which might mean more stable and thick planet atmospheres.
  MuchSlower = "MuchSlower",
  /// If the star has a high mass, it'll have a longer lifespan. It also has a weaker
  /// magnetic field because of its abnormal speed, which means less protection for the star's
  /// planets from cosmic rays and interstellar radiation. It also has reduced stellar winds,
  /// which might mean more stable and thick planet atmospheres.
  // #[default]
  Slower = "Slower",
  /// If the star has a high mass, it'll have a shorter lifespan. It also have a stronger magnetic
  /// field, which protects the star's planets from cosmic rays and interstellar radiations. But
  /// it also leads to more frequent and intense solar flares and stellar winds. Said stellar
  /// winds could have a detrimental effect on the atmospheres in the system. Finally, the
  /// radiation emitted by the star would also be higher, which poses a threat to any potential
  /// life.
  Faster = "Faster",
  /// If the star has a high mass, it'll have a shorter lifespan. It also have a much stronger
  /// magnetic field, which protects the star's planets from cosmic rays and interstellar
  /// radiations. But it also leads to more frequent and intense solar flares and stellar winds.
  /// Said stellar winds could have a detrimental effect on the atmospheres in the system.
  /// Finally, the radiation emitted by the star would also be higher, which poses a threat to any
  /// potential life.
  MuchFaster = "MuchFaster",
}
export type RotationAnomalySpeed = keyof typeof RotationAnomalySpeedEnum | keyof RotationAnomalySpeedEnum;
