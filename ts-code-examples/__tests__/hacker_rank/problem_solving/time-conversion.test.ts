import { timeConversion } from "../../../src/hacker_rank/problem_solving/time-conversion";

describe("time conversion", () => {
  it("test 12 AM", () => {
    const res = timeConversion("12:01:00AM"); // Return 00:01:00

    console.log(res);

    expect(res).toBe("00:01:00");
  });

  it("test 2 AM", () => {
    const res = timeConversion("02:01:00AM"); // Return 02:01:00

    console.log(res);
  });

  it("test 12 PM", () => {
    const res = timeConversion("12:01:00PM"); // Return 12:01:00

    console.log(res);
  });

  it("test 3 PM", () => {
    const res = timeConversion("03:01:00PM"); // Return 15:01:00

    console.log(res);
  });
});
