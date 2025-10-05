// See leetcode 242 for additional solution

export function isAnagramSorted(s: string, t: string): boolean {
  function sortString(str: string) {
    return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
  }

  return sortString(s) === sortString(t);
}
