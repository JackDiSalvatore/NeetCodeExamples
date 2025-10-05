/**
 * Capitalize every word in a sentence.
 * Hint: create an array containing every word in the sentence.
 * And capitalize each element of the array. Then re-join the array
 * into a string.
 * @param str Input sentence
 * @returns Capitalized string
 */
export function capitalizeString(str: string): string {
  const words = str.split(" ");
  // const uppercased = [];

  // for (let word of words) {
  //   uppercased.push(word[0].toUpperCase() + word.slice(1, word.length));
  // }

  // return uppercased.join(" ");

  return words
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1, word.length);
    })
    .join(" ");
}
