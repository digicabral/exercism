enum colorKeys {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}

export function decodedResistorValue(colors: Array<string>): string {
  const color1 = colorKeys[colors[0] as keyof typeof colorKeys];
  const color2 = colorKeys[colors[1] as keyof typeof colorKeys];
  const color3 = colorKeys[colors[2] as keyof typeof colorKeys];

  const join = `${color1}${color2}`;

  const retorno = color3 > 0 ? parseInt(join) * 10 ** color3 : parseInt(join);
  if (retorno < 1000) {
    return `${retorno} ohms`;
  } else if (retorno >= 1000 && retorno < 1000000) {
    return `${retorno / 1000} kiloohms`;
  } else if (retorno > 1000000 && retorno < 1000000000) {
    return `${retorno / 1000000} megaohms`;
  } else {
    return `${retorno / 1000000000} gigaohms`;
  }
}
