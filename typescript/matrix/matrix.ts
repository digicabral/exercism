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

  get columns(): number[][] {
    let outerColumn: number[][] = [];
    const rows = this.rows;
    rows.forEach(() => {
      outerColumn.push([]);
    });

    for (const row of rows) {
      row.forEach((value, index) => {
        outerColumn[index].push(value);
      });
    }

    return outerColumn;
  }
}
