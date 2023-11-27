export function hey(message: string): string {
  const noTrail = message.replace(/\t+/g, "");
  const trimmed = noTrail.trim();
  const last = trimmed.charAt(trimmed.length - 1);
  const onlyChars = trimmed.replace(/[^a-z]/gi, "");

  const allUpper = /^[A-Z]+$/.test(onlyChars);

  if (last === "?" && !allUpper) {
    return "Sure.";
  } else if (allUpper && last !== "?") {
    return "Whoa, chill out!";
  } else if (last === "?" && allUpper) {
    return "Calm down, I know what I'm doing!";
  } else if (last === "") {
    return "Fine. Be that way!";
  }
  return "Whatever.";
}
