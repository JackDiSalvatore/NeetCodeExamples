/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

   0 1 2
0: 1 2 3
1: 4 5 6
2: 9 8 9

The left-to-right diagonal 1 + 5 + 9 = 15.
The right-to-left diagonal 3 + 5 + 9 = 17.
Their absolute difference is |15 - 17| = 2.
*/

export function diagonalDifference(arr: number[][]): number {
  // console.table(arr);

  const n = arr.length;
  let diag1 = 0;
  let diag2 = 0;

  for (let i = 0; i < n; i++) {
    // count first diagonal: [0][0], [1][1], [2][2], etc
    diag1 += arr[i][i];

    // count second diagonal: [0],[n-1], [1][n-2], [2][n - 3]
    diag2 += arr[i][n - 1 - i]; // subtract an extra '1' because i starts at 0
  }

  return Math.abs(diag1 - diag2);
}
