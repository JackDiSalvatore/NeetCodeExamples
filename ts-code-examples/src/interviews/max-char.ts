/**
 * Given a string, return the character that occurs the most
 *
 * ex: "abcccd" -> "c"
 * ex: "queen" -> "e"
 */

export function maxChar(s: string): string {
  const charCount = new Map<string, number>();

  for (let char of s) {
    const existing = charCount.get(char);

    charCount.set(char, existing ? existing + 1 : 1);
  }

  //   console.log(charCount);

  let maxCount = 0;
  let maxChar = "";

  for (let [char, count] of charCount) {
    if (count > maxCount) {
      maxCount = count;
      maxChar = char;
    }
  }

  return maxChar;
}
