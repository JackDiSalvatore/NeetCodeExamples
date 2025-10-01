function mapString(s: string): Map<string, number> {
  const map = new Map<string, number>();

  for (let char of s) {
    const count = map.get(char);
    map.set(char, count ? count + 1 : 1);
  }

  return map;
}

/**
 * Two strings are considered to be valid anagrams if they
 * both contains the same exact characters, the order does not matter.
 * @param s first string in anagram
 * @param t second string in anagram
 * @returns true if both strings are a valid anagram
 */
export function isAnagram(s: string, t: string): boolean {
  // Compare two maps
  // ex:
  // tart vs trat

  // {
  //   t: 2,
  //   a: 1,
  //   r: 1
  // }

  // {
  //   r: 1,
  //   a: 1,
  //   t: 2
  // }

  if (s.length !== t.length) return false;

  const firstStringMap = mapString(s);
  const secondStringMap = mapString(t);

  // console.log(firstStringMap);
  // console.log(secondStringMap);

  for (let char of s) {
    if (firstStringMap.get(char) !== secondStringMap.get(char)) return false;
  }

  return true;
}
