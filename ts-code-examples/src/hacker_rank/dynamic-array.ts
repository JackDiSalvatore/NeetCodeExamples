/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

export function dynamicArray(n: number, queries: number[][]): number[] {
  let arr: number[][] = [];
  let lastAnswer = 0;
  const answers = [];

  for (let i = 0; i < n; i++) {
    const seq: number[] = [];
    arr.push(seq);
  }

  for (let query of queries) {
    const [q, x, y] = query;

    let idx = 0;

    switch (q) {
      case 1:
        idx = (x ^ lastAnswer) % n;
        arr[idx].push(y);
        break;
      case 2:
        idx = (x ^ lastAnswer) % n;
        lastAnswer = arr[idx][y % arr[idx].length];
        answers.push(lastAnswer);
        break;
      default:
        break;
    }
  }

  return answers;
}
