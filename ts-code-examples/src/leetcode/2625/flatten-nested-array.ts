/**
 * Given a multi-dimensional array `arr` and a depth `n`, return a flattened version of that array.
 *
 * A multi-dimensional array is a recusive data structure
 */

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

export function flat(
  arr: MultiDimensionalArray,
  n: number // depth
): MultiDimensionalArray {
  const result: MultiDimensionalArray = [];

  function flatten(arr: MultiDimensionalArray, currDepth: number) {
    for (let el of arr) {
      //   console.log(el);

      if (Array.isArray(el) && currDepth < n) {
        flatten(el, currDepth + 1);
      } else {
        result.push(el);
      }
    }
  }

  flatten(arr, 0);

  return result;
}
