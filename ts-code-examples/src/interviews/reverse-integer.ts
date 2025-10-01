// ex: 12345 -> 54321
export function reverseInteger(integer: number): number {
  let reversedString = "";

  let asArr = integer.toString().split("");
  // console.log("asArr: ", asArr);

  for (let i = asArr.length - 1; i >= 0; i--) {
    reversedString += asArr[i];
  }

  //   console.log("reversedString: ", reversedString);

  const ans = parseInt(reversedString);

  //   console.log("ans: ", ans);

  return ans * Math.sign(integer); // handle negative numbers
}
