export enum CelestialBodyWorldTypeEnum {
    /// Worlds cold enough to have water ice and similar frozen volatiles on its surface. May have liquid oceans under the surface if conditions are ok.
    Ice = "Ice",
    /// Worlds orbiting gas giants that experience tremendous amount of volcanic activity because of their proximity to the giant and other moons.
    Sulfur = "Sulfur",
    /// Worlds not large enough to retain water vapor, and too hot to have much ice without atmosphere.
    Rock = "Rock",
    /// Worlds large enough to retain gaseous nitrogen but so cold that their nitrogen atmosphere is frozen on the surface.
    Hadean = "Hadean",
    /// Worlds large enough to retain a thick atmosphere, but so cold that water is always frozen. Instead, the atmosphere is mainly composed of
    /// ammonia and methane, and oceans are made of liquid ammonia with substantial amounts of water. Very unlikely around stars brighter than red dwarfs,
    /// for ammonia breaks down quickly when exposed to ultraviolet light.
    Ammonia = "Ammonia",
    /// Worlds large enough to retain a thick atmosphere and are almost or entirely covered by oceans.
    Ocean = "Ocean",
    /// Worlds large enough to retain a thick atmosphere and plenty of water.
    Terrestrial = "Terrestrial",
    /// Worlds large enough to retain a thick atmosphere and plenty of water, but which became too hot and experienced a greenhouse effect. Some still have
    /// oceans of surface water. The air is unbreathable and furnace-hot and the planet is extremely hostile.
    Greenhouse = "Greenhouse",
    /// Worlds that would be large enough to retain a thick atmosphere, but that are so close to their star that almost all their volatiles have been stripped
    /// away. There may still be a tenuous atmosphere left, but likely composed of vaporized metals.
    Chthonian = "Chthonian",
    /// Worlds that are mostly made of an endless atmosphere of volatiles, like ice and gas giants.
    VolatilesGiant = "VolatilesGiant",
}
export type CelestialBodyWorldType = keyof typeof CelestialBodyWorldTypeEnum | keyof CelestialBodyWorldTypeEnum;
