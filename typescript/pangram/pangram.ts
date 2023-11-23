export function isPangram(input: string): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const loweredInput = input.toLowerCase();

  for (let char of alphabet) {
    if (loweredInput.indexOf(char) === -1) {
      return false;
    }
  }

  return true;
}
