export enum GalaxySubCategoryEnum {
    /// Small congregation of star clusters without discernable order.
    DwarfAmorphous = "DwarfAmorphous",
    /// A galaxy that has a highly unconventional form. It could be because of a previous interaction with another galaxy that ended badly.
    Amorphous = "Amorphous",
    /// Small galaxy that shows traits similar to those of a spiral galaxy but with higher star formation rates.
    DwarfSpiral = "DwarfSpiral",
    /// Flat spiral galaxy that have an almost non-existent galactic bulge.
    FlatSpiral = "FlatSpiral",
    /// Spiral galaxy with gas-rich bar-shaped elongations of stars in the center.
    // #[default]
    BarredSpiral = "BarredSpiral",
    /// Spiral galaxy with a gas-poor elliptical bulge in the center.
    ClassicSpiral = "ClassicSpiral",
    /// Small galaxy that shows traits similar to those of a lenticular galaxy but with higher star formation rates.
    DwarfLenticular = "DwarfLenticular",
    /// Often more massive than spirals, with thicker disks and extensive halos of globular clusters, while being dustier than ellitpicals.
    CommonLenticular = "CommonLenticular",
    /// A giant galaxy looking like a flattened elliptical.
    GiantLenticular = "GiantLenticular",
    /// Small galaxy that shows traits similar to those of an elliptical galaxy but with higher star formation rates.
    DwarfElliptical = "DwarfElliptical",
    /// Very rare in the Early Stelliferous era, common elliptical galaxies usualy come from early intense starburst activity, or are the
    /// result of galaxy interactions. They tend to be at the center of galactic clusters, eating the other galaxies and growing to be the
    /// most massive galaxies.
    CommonElliptical = "CommonElliptical",
    /// Very rare in the Early Stelliferous era, giant elliptical galaxies usualy come from early intense starburst activity, or are the
    /// result of galaxy interactions. They tend to be at the center of galactic clusters, eating the other galaxies and growing to be the
    /// most massive galaxies.
    GiantElliptical = "GiantElliptical",
}
export type GalaxySubCategory = typeof GalaxySubCategoryEnum | keyof typeof GalaxySubCategoryEnum;

