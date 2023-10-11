export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const colorCode = (color: string) => {
  const obj: Record<string, number> = {};
  COLORS.forEach((value, index) => {
    obj[value] = index;
  });
  return obj[color];
};
