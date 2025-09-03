export function hourglassSum(arr: number[][]): number {
  let max = Number.MIN_SAFE_INTEGER;

  for (let x = 0; x < arr.length - 2; x++) {
    for (let y = 0; y < arr[x].length - 2; y++) {
      const top = arr[x][y] + arr[x][y + 1] + arr[x][y + 2];
      const middle = arr[x + 1][y + 1];
      const bottom = arr[x + 2][y] + arr[x + 2][y + 1] + arr[x + 2][y + 2];

      const sum = top + middle + bottom;

      max = sum > max ? sum : max;
    }
  }

  return max;
}
