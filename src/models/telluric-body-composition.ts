export enum TelluricBodyCompositionEnum {
    Metallic = "Metallic",
    Rocky = "Rocky",
}
export type TelluricBodyComposition = keyof typeof TelluricBodyCompositionEnum | keyof TelluricBodyCompositionEnum;
