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

  function flatten(innerArr: MultiDimensionalArray, currentDepth: number) {
    for (let el of innerArr) {
      if (Array.isArray(el) && currentDepth < n) {
        // console.log("flatten: ", el, " (currDepth: ", currentDepth, ")");

        flatten(el, currentDepth + 1);
      } else {
        // console.log("pushing: ", el);
        result.push(el);
      }
    }
  }

  flatten(arr, 0);

  return result;
}
