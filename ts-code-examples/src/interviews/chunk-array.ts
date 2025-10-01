/**
 * Given an array and chunk size, divide the array into sub-arrays where each sub-array is at least length `size`
 *
 * ex:
 * chunk = 2
 * arr = [1,2,3,4] -> [1, 2], [3, 4]
 *
 * ex:
 * chunk = 2
 * arr = [1,2,3,4,5] -> [[1, 2], [3, 4], [5]]
 *
 */

export function chunkArray(array: number[], size: number): number[][] {
  const chunked: number[][] = [];

  let i = 0;

  while (i < array.length) {
    const chunk = array.slice(i, i + size);

    // console.log(`chunk: ${chunk}`);
    chunked.push(chunk);

    i = i + size;
  }
  return chunked;
}
