export function reverseString(s: string): string {
  let reverse = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reverse += s[i];
  }

  return reverse;
}
