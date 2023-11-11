import { ZoneTypeValue } from "./zone-type";

export interface StarZone {
    start: number;
    end: number;
    zoneType: ZoneTypeValue;
}

export interface StarZoneDTO {
    start: number;
    end: number;
    zone_type: ZoneTypeValue;
}
