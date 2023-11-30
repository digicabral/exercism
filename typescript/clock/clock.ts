export class Clock {
  private _date: Date = new Date();
  constructor(hour: number, minute: number = 0) {
    this._date.setHours(hour, minute);
  }

  public toString(): string {
    return (
      ("0" + this._date.getHours()).slice(-2) +
      ":" +
      ("0" + this._date.getMinutes()).slice(-2)
    );
  }

  public plus(minutes: number): Clock {
    this._date = new Date(this._date.getTime() + minutes * 60000);
    return this;
  }

  public minus(minutes: number): Clock {
    this._date = new Date(this._date.getTime() - minutes * 60000);
    return this;
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }
}
