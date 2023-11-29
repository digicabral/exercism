export class Robot {
  public name: string;
  private static namesDB: Set<string> = new Set<string>();

  constructor() {
    this.name = this.generateName();
  }

  private generateName(): string {
    const name = this.newName();

    if (!Robot.namesDB.has(name)) {
      Robot.namesDB.add(name);
      return name;
    }
    return this.generateName();
  }

  private makeid(characters: string, length: number): string {
    let result = "";
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      counter += 1;
    }
    return result;
  }

  private newName(): string {
    return (
      this.makeid("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2) +
      this.makeid("0123456789", 3)
    );
  }

  public resetName(): void {
    this.name = this.generateName();
  }

  public static releaseNames(): void {
    this.namesDB.clear();
  }
}
