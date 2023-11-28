export class Matrix {
  private matrix: string;

  constructor(param: string) {
    this.matrix = param;
  }

  get rows(): number[][] {
    let convertedElement: number[] = [];
    let convertedRow: number[][] = [];
    const lines = this.matrix.split("\n");

    lines.forEach((line) => {
      const rowElements = line.split(" ");
      rowElements.forEach((element) => {
        convertedElement.push(parseInt(element));
      });
      convertedRow.push(convertedElement);
      convertedElement = [];
    });

    return convertedRow;
  }

  get columns(): unknown {
    throw new Error("Remove this statement and implement this function");
  }
}
