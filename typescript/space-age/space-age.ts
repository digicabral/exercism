const planetsBaseYears = {
  earth: 31557600,
  mercury: 7600525.8,
  venus: 19411026.18,
  mars: 59360959.84,
  jupiter: 374222565.15,
  saturn: 930232558.14,
  uranus: 2630703165.22,
  neptune: 5202924160.0,
};

export function age(planet: string, seconds: number): number {
  return Number(
    (
      seconds / planetsBaseYears[planet as keyof typeof planetsBaseYears]
    ).toFixed(2)
  );
}
