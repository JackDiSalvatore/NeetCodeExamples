// function isAlphaNumeric(char: string): boolean {
//   if (char === undefined) return false;

//   const asciiValue = char.charCodeAt(0);

//   if (
//     ("A".charCodeAt(0) <= asciiValue && asciiValue <= "Z".charCodeAt(0)) ||
//     ("a".charCodeAt(0) <= asciiValue && asciiValue <= "z".charCodeAt(0)) ||
//     ("0".charCodeAt(0) <= asciiValue && asciiValue <= "9".charCodeAt(0))
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

/**
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * @param s string to validate
 * @returns true if string s is a palindrome
 */
export function isPalindrome(s: string): boolean {
  // ex: panap
  //     |   | (p = p)
  //      | |  (a = a)
  //       |    (n)

  let left = 0;
  let right = s.length - 1;

  // console.log("left:", s[left]);
  // console.log("right:", s[right]);

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}
