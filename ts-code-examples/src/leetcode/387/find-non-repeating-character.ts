/**
 * Find the first non-repeating character in a string
 *
 * Given a string, find the non-repeating character in it and return its index.
 * If it doesn't exist, return -1.
 *
 * ex:
 * s = "helloworld"
 * answer = firstUniqueChar(s)
 * answer is 0
 *
 * ex:
 * s = "mississippi"
 * answer = firstUniqueChar(s)
 * answer is 1
 */

export function firstUniqueChar(s: string): number {
  const uniqueCharacters = new Map<string, number>();

  for (let idx = 0; idx <= s.length - 1; idx++) {
    const existingCharCount = uniqueCharacters.get(s[idx]);

    uniqueCharacters.set(s[idx], existingCharCount ? existingCharCount + 1 : 1);
  }

  for (let idx = 0; idx <= s.length - 1; idx++) {
    if (uniqueCharacters.get(s[idx]) === 1) return idx;
  }

  return -1;
}
