/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 *
 * NOTES:
 * mimimum sum should exclude the largest number
 * maximum sum should exculde the smallest number
 *
 * take the total sum - largets number = miniSum
 * take the total sum - smallest number = maxSum
 */

export function miniMaxSum(arr: number[]): void {
  // Write your code here
  let largest = arr[0];
  let smallest = arr[0];

  let total = 0;

  for (let a of arr) {
    if (a > largest) {
      largest = a;
      // disregard a in minSum
    }

    if (a < smallest) {
      smallest = a;
      // disregard a in maxSum
    }

    total += a;
  }

  //   console.log("total: ", total);
  //   console.log("smallest: ", smallest);
  //   console.log("largest: ", largest);

  console.log(total - largest, total - smallest);
}
