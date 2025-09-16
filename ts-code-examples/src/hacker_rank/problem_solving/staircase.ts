/*
Staircase detail

This is a staircase of size n = 4

   #
  ##
 ###
####

Its base and height are both equal to n.  It is drawn using `#` symbols and
spaces.  The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.

Explaination:

Loop (n=4)
1st iter: `3` spaces, `1` #
2nd iter: `2` spaces, `2` #
3rd iter: `1` spaces, `3` #
4th iter: `0` spaces, `4` #

*/

export function staircase(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}
