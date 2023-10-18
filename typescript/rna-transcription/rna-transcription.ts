const target = {
  C: "G",
  G: "C",
  A: "U",
  T: "A",
};

export function toRna(dna: string): string {
  let rna = "";
  for (const item of dna) {
    const transcripted = target[item as keyof typeof target];
    if (!transcripted) throw Error("Invalid input DNA.");

    rna += transcripted;
  }
  return rna;
}
