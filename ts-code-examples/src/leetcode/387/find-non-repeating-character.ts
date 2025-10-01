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
  // First create a map of each character -> number of occurance times
  const uniqueChars = new Map<string, number>();

  for (let char of s) {
    const currentCount = uniqueChars.get(char);
    uniqueChars.set(char, currentCount ? currentCount + 1 : 1);
  }

  // console.log(uniqueChars);

  // Then iterate through the string again, and
  // if the character only occurs `1` time, then return the current index
  for (let i = 0; i < s.length; i++) {
    if (uniqueChars.get(s[i]) === 1) return i;
  }

  return -1;
}
