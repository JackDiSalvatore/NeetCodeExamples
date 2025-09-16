import { birthdayCakeCandles } from "../../../src/hacker_rank/problem_solving/birthday-cake-candles";

describe("birthday cake candles", () => {
  it("test 1", () => {
    const candles = [4, 4, 1, 3];

    const res = birthdayCakeCandles(candles);

    expect(res).toBe(2); // 2
  });

  it("test 2", () => {
    const candles = [4, 4, 1, 3, 5];

    const res = birthdayCakeCandles(candles);

    expect(res).toBe(1); // 1
  });

  it("test 3", () => {
    const candles = [3, 2, 1, 3];

    const res = birthdayCakeCandles(candles);

    expect(res).toBe(2); // 2
  });
});
