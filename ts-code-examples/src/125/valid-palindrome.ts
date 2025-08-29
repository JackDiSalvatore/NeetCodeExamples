function isAlphaNumeric(char: string): boolean {
  if (char === undefined) return false;

  const asciiValue = char.charCodeAt(0);

  if (
    ("A".charCodeAt(0) <= asciiValue && asciiValue <= "Z".charCodeAt(0)) ||
    ("a".charCodeAt(0) <= asciiValue && asciiValue <= "z".charCodeAt(0)) ||
    ("0".charCodeAt(0) <= asciiValue && asciiValue <= "9".charCodeAt(0))
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * @param s string to validate
 * @returns true if string s is a palindrome
 */
export function isPalindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    // move `l` pointer when character is not alphanumeric
    // check l < r, else out of bounds
    while (!isAlphaNumeric(s[l]) && l < r) l++;

    // move `r` pointer when character is not alphanumeric
    // check r > l, else out of bounds
    while (!isAlphaNumeric(s[r]) && r > l) r--;

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }
  return true;
}
