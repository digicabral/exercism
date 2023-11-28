import Randexp from "randexp";

export class Robot {
  public name: string;
  private static namesDB: Set<string> = new Set<string>();

  constructor() {
    this.name = this.generateName();
  }

  private generateName(): string {
    const name = this.newName();
    const initialSetSize = Robot.namesDB.size;
    let increseadSetSize = Robot.namesDB.size;

    while (initialSetSize <= increseadSetSize) {
      if (!Robot.namesDB.has(name)) {
        Robot.namesDB.add(name);
        increseadSetSize++;
        return name;
      }
    }
    return "";
  }

  private newName(): string {
    const regex = new Randexp(/^[A-Z]{2}\d{3}$/);
    return regex.gen();
  }

  public resetName(): void {
    this.name = this.generateName();
  }

  public static releaseNames(): void {
    console.log(this.namesDB);
    this.namesDB.clear();
  }
}
