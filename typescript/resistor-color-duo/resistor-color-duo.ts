export function decodedValue(colors: Array<string>): number {
  colors = colors.slice(0, 2);
  let ret: string = "";
  colors.forEach((color) => {
    switch (color) {
      case "brown":
        ret = ret + "1";
        break;

      case "red":
        ret = ret + "2";
        break;

      case "orange":
        ret = ret + "3";
        break;

      case "yellow":
        ret = ret + "4";
        break;

      case "green":
        ret = ret + "5";
        break;

      case "blue":
        ret = ret + "6";
        break;

      case "violet":
        ret = ret + "7";
        break;

      case "grey":
        ret = ret + "8";
        break;

      case "white":
        ret = ret + "9";
        break;

      case "black":
        ret = ret + "0";
        break;

      default:
        ret = "";
    }
  });
  return parseInt(ret, 10);
}
