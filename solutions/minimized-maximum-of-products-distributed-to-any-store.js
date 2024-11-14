// Pseudo Code:
// The goal is to minimize the maximum number of products distributed to any store.
// We will use binary search to find the minimum possible maximum number of products.

// Function minimizedMaximum(n, quantities):
// 1. Define a helper function canDistribute(maxProducts):
//    a. Initialize storesNeeded to 0.
//    b. For each quantity in quantities:
//       i. Increment storesNeeded by the ceiling of (quantity / maxProducts).
//       ii. If storesNeeded exceeds n, return false.
//    c. Return true if storesNeeded is less than or equal to n.

// 2. Initialize low to 1 and high to the maximum value in quantities.
// 3. Initialize answer to high.

// 4. While low is less than or equal to high:
//    a. Calculate mid as the floor of (low + high) / 2.
//    b. If canDistribute(mid) is true:
//       i. Set answer to mid.
//       ii. Update high to mid - 1.
//    c. Else:
//       i. Update low to mid + 1.

// 5. Return answer.

/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {
    const canDistribute = (maxProducts) => {
        let storesNeeded = 0;
        for (const quantity of quantities) {
            storesNeeded += Math.ceil(quantity / maxProducts);
            if (storesNeeded > n) return false;
        }
        return storesNeeded <= n;
    };

    let low = 1;
    let high = Math.max(...quantities);
    let answer = high;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (canDistribute(mid)) {
            answer = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return answer;
};

module.exports = { minimizedMaximum };