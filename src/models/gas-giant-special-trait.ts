export enum GasGiantSpecialTraitEnum {
  /// This Gas Giant has the exact traits that one might expect for a member of its type and subtype.
  // #[default]
  NoPeculiarity = "NoPeculiarity",
  /// This Gas Giant was the first to arise from its star proto-planetary disk.
  // #[default]
  ProtoGiant = "ProtoGiant",
}
export type GasGiantSpecialTrait =
  | keyof typeof GasGiantSpecialTraitEnum
  | typeof GasGiantSpecialTraitEnum;
