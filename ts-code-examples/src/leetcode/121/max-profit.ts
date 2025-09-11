export function maxProfit(prices: number[]): number {
  let l = 0;
  let r = 1;
  let maxPrice = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      maxPrice =
        maxPrice < prices[r] - prices[l] ? prices[r] - prices[l] : maxPrice;
    } else {
      l = r;
    }
    r++;
  }

  return maxPrice;
}
