export enum GalacticRegionEnum {
    /// This division spawns accross a number of different regions.
    Multiple = "Multiple",
    /// The core of an elliptical galaxy. Stars there are generally older, numerous and densely packed.
    Core = "Core",
    /// The core of a spiral or dwarf lenticular galaxy.
    Nucleus = "Nucleus",
    /// The bulge of a spiral or lenticular galaxy. Stars there are generally numerous and densely packed, but age and star generation rate
    /// depends on the type of bulge.
    Bulge = "Bulge",
    /// The central bar of barred spiral galaxies. It channels gas inwards from the spiral arms and acts as a kind of stellar nursery.
    Bar = "Bar",
    /// The arms of a spiral galaxy. Stars there are usualy young, with numerous bright blue stars due to the high mass density and high
    /// rate of star formation.
    Arm = "Arm",
    /// The disk of a lenticular galaxy, or the space between the arms in a spiral one. Stars there usualy follow a very regular and
    /// circular orbit.
    Disk = "Disk",
    /// The majority of an elliptical galaxy's content. Star formation rate is usualy quite poor.
    Ellipse = "Ellipse",
    /// The area in the outskirts of a galaxy. Stars there are generally much older and way less densely packed.
    Halo = "Halo",
    /// The area in the outskirts of an irregular galaxy lost in the void or distorded by the influence of other members of a cluster. Stars
    /// there are generally older and way less densely packed.
    Aura = "Aura",
    /// The void outside the limits of the galaxy proper. One can still find the occasional stray stars and satellite clusters around.
    // #[default]
    Void = "Void",
    /// A spheroidal conglomeration of stars gound together by their gravity, with a higher concentration of stars towards the center. They
    /// tenbd to be older, denser and have less metallicity
    GlobularCluster = "GlobularCluster",
    /// A cluster of stars made up from the same giant molecular cloud. They have roughly the same age and are loosely bound by mutual
    /// gravitational attraction.
    OpenCluster = "OpenCluster",
    /// A very loose cluster of stars that share a common origin. They no longer are bound by gravitational attraction, but still move
    /// together through space.
    Association = "Association",
    /// A number of stars which was previously a cluster and has been torn apart and stretched out along the orbit of a galaxy by tidal
    /// forces.
    Stream = "Stream",
    /// Some stars lost into the void, pushed out of their normal course by gravity during their past.
    Exile = "Exile",
}
export type GalacticRegion = keyof typeof GalacticRegionEnum | keyof GalacticRegionEnum;
