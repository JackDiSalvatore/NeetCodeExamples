function mapString(s: string): Map<string, number> {
  const map = new Map<string, number>();

  for (let i = 0; i <= s.length - 1; i++) {
    const key = map.get(s[i]);

    if (key === undefined) {
      map.set(s[i], 1);
    } else map.set(s[i], key + 1);
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
  if (s.length !== t.length) return false;

  const sMap = mapString(s);
  const tMap = mapString(t);

  // console.log(sMap);
  // console.log(tMap);

  for (let [key, val] of sMap.entries()) {
    if (tMap.get(key) === undefined) return false;

    if (tMap.get(key) !== val) return false;
  }

  return true;
}
