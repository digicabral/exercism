export class DnDCharacter {
  public hitpoints: number;
  public constitution: number;
  public strength: number;
  public dexterity: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;

  constructor() {
    this.constitution = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
  }

  public static generateAbilityScore(): number {
    let diceThrows = [];
    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      diceThrows.push(random);
    }

    const sum = this.removeSmallest(diceThrows).reduce((acc, curr) => {
      return acc + curr;
    });

    return sum;
  }

  private static removeSmallest(inputArray: number[]): number[] {
    const min = Math.min(...inputArray);
    return inputArray.filter((e) => e !== min);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
