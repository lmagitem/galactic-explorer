export interface GalacticMapDivisionLevel {
    /// The divisions' "level" this object represents. The higher the level, the bigger the division. 0 is a single hex, 1 a subsector,
    /// 2 a sector, and so on...
    level: number,
    /// How many inferior level divisions this level spans on the x axis, or how many parsecs for level 0.
    xSubdivisions: number,
    /// How many inferior level divisions this level spans on the y axis, or how many parsecs for level 0.
    ySubdivisions: number,
    /// How many inferior level divisions this level spans on the z axis, or how many parsecs for level 0.
    zSubdivisions: number,
}

export interface GalacticMapDivisionLevelDTO {
    /// The divisions' "level" this object represents. The higher the level, the bigger the division. 0 is a single hex, 1 a subsector,
    /// 2 a sector, and so on...
    level: number,
    /// How many inferior level divisions this level spans on the x axis, or how many parsecs for level 0.
    x_subdivisions: number,
    /// How many inferior level divisions this level spans on the y axis, or how many parsecs for level 0.
    y_subdivisions: number,
    /// How many inferior level divisions this level spans on the z axis, or how many parsecs for level 0.
    z_subdivisions: number,
}
