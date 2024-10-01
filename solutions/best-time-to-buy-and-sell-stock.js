// Pseudo Code:
// First we create 2 pointers l and r where l will start from 0 and r will start from l+1
// Then we check if prices[l] < prices[r] if true we increment both l and r ptrs.
// If prices[l] > prices[r] we found a low price so lPtr = rPtr and rPtr++
// While prices[l] < prices[r] there is a profitable trade so calculate profit rPtr - lPtr
// check if prev. profit is grater than curr. profit and update currMaxProfit

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let lPtr = 0;
  let rPtr = lPtr + 1;
  let currMaxProfit = 0;

  while (rPtr < prices.length) {
    let profit = 0;

    if (prices[lPtr] < prices[rPtr]) {
      profit = prices[rPtr] - prices[lPtr];
      currMaxProfit = Math.max(currMaxProfit, profit);
    } else {
      lPtr = rPtr;
    }
    rPtr++;
  }

  return currMaxProfit;
}

module.exports = { maxProfit };
