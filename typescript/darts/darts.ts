function calculateDistance(x: number, y: number): number {
  const distance = Math.sqrt(Math.pow(x - 0, 2) + Math.pow(y - 0, 2));
  return distance;
}

export function score(x: number, y: number): number {
  const distance = calculateDistance(x, y);
  if (distance <= 1) {
    return 10;
  } else if (distance <= 5) {
    return 5;
  } else if (distance <= 10) {
    return 1;
  } else return 0;
}
