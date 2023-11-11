export enum StellarEvolution {
  /// Population III: The first generation of stars, formed from primordial gas with virtually no
  /// metals, likely massive and short-lived. Given the near absence of metals, Population III
  /// stars couldn't probably host rocky planets, if planets they have, they would only be gas
  /// giants or unusual compositions not seen in today's universe. Any protoplanetary disks around
  /// these stars would be primarily composed of hydrogen and helium, with very few heavier elements.
  Paleodwarf = "Paleodwarf",
  /// Population II: Older stars with low metallicity, typically found in globular clusters and
  /// the halo of galaxies. Their planetary systems, if they exist, might have fewer rocky planets
  /// and more gas giants. The terrestrial planets that do form might be smaller and less diverse
  /// in composition. Asteroid belts and Kuiper belt-like structures might be less dense and less
  /// varied in composition due to the scarcity of heavier elements.
  Subdwarf = "Subdwarf",
  /// Early Population I: Younger, metal-rich stars found in the spiral arms and disks of
  /// galaxies, associated with ongoing star formation. Sol is a Early Population I star.
  Dwarf = "Dwarf",
  /// Late Population I: Stars that are metal-rich and found in galactic disks, but older than
  /// early Population I stars, representing a more mature phase of galactic evolution. Could have
  /// increased chances of finding life on habitable planets.
  Superdwarf = "Superdwarf",
  /// Population 0: Extremely old stars from a universe nearing its end, having witnessed multiple
  /// generations of stellar evolution and potentially having very high metallicity due to the
  /// cumulative effects of countless supernovae and stellar processes over time. They might host
  /// planets with exotic compositions, enriched with heavy elements.
  Hyperdwarf = "Hyperdwarf",
}

export type StellarEvolutionValue = typeof StellarEvolution | keyof typeof StellarEvolution;
