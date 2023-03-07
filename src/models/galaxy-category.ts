export interface GalaxyCategory {
    /// Loose cloud of gas and stars lost in the void between galaxies. The associated numbers are the length, width and height of this
    /// galaxy in parsecs.
    Intergalactic?: [ number, number, number ],
    /// Dwarf galaxies that do not fit clearly into any other category. Protogalaxies began as irregular before growing into, merging with,
    /// or becoming satellites of larger galaxies. The associated numbers represent the length, width and height of this galaxy in parsecs.
    Irregular?: [ number, number, number ],
    /// Disk galaxies with prominent arms rotating around a central bulge. Star formation is most active in the arms, where molecular clouds
    /// are densest. The associated numbers represent the radius and thickness of this galaxy in parsecs.
    Spiral?: [ number, number ],
    /// Disk galaxies common to galaxy clusters. With the exception of dwarf lenticulars which are thick pure disk spirals, lenticulars have
    /// lost or used most of their star-making gas early in their history. The associated numbers represent the radius and thickness of this
    /// galaxy in parsecs.
    Lenticular?: [ number, number ],
    /// Spherical or ovoid galaxies that lost or used most of their gas early on which renders their star formation activity minimal.
    /// The associated numbers represent the radius of this galaxy in parsecs.
    Elliptical?: number,
    /// Loose cloud of gas and stars between galaxies. The associated numbers are the length, width and height of this galaxy in parsecs.
    Intracluster?: [ number, number, number ],
    /// Found near the centres of rich galaxy clusters, dominant elliptical galaxies have grown to very large sizes by merging or eating
    /// other galaxies from their cluster. The associated numbers represent the radius of this galaxy in parsecs.
    DominantElliptical?: number,
}
