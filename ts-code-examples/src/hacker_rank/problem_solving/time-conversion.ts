/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 *
 * Description:
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time
 *
 * Note: we only have to convert the hours based on AM/PM
 *
 * 1. 12AM -> 00
 * 2. 1AM - 11AM -> do nothing
 * 2. 12PM -> do nothing
 * 2. 1PM - 11PM -> add 12 (ie. 1PM = 13)
 */

export function timeConversion(s: string): string {
  // Write your code here
  let militaryTime = "";

  const amOrPm = s.slice(8, 10);

  // console.log("Time: ", amOrPm);

  if (amOrPm === "AM") {
    // 12 AM
    if (s[0] + s[1] == "12") militaryTime = "00" + s.slice(2, 8);
    // 1AM - 11 AM
    else militaryTime = s.slice(0, 8);
  }

  if (amOrPm === "PM") {
    const prevTime = parseInt(s[0] + s[1]);

    if (prevTime === 12) militaryTime = s.slice(0, 8);
    else militaryTime = (prevTime + 12).toString() + s.slice(2, 8);
  }

  return militaryTime;
}
