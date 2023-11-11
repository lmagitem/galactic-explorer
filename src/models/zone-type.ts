export enum ZoneType {
    Corona = "Corona",
    InnerLimit = "InnerLimit",
    InnerZone = "InnerZone",
    BioZone = "BioZone",
    OuterZone = "OuterZone",
    ForbiddenZone = "ForbiddenZone",
}

export type ZoneTypeValue = typeof ZoneType | keyof typeof ZoneType;
