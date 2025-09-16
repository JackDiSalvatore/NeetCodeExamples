/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 *
 * Description:
 * count the number of tallest candles
 */

export function birthdayCakeCandles(candles: number[]): number {
  // Write your code here
  let tallest = -Infinity;
  let count = 0;

  for (let candle of candles) {
    if (candle > tallest) {
      tallest = candle;
      count = 1;
    } else if (candle === tallest) {
      count++;
    }
  }

  return count;
}
