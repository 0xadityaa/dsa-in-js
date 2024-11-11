// Pseudo Code for BrowserHistory:

// Class BrowserHistory:
// 1. Initialize a history array with the homepage as the first element.
// 2. Set the current index to 0.

// Method visit(url):
// 1. Truncate the history array to the current index + 1.
// 2. Increment the current index.
// 3. Add the new URL to the history array.

// Method back(steps):
// 1. Decrement the current index by steps, ensuring it does not go below 0.
// 2. Return the URL at the current index.

// Method forward(steps):
// 1. Increment the current index by steps, ensuring it does not exceed the last index of the history array.
// 2. Return the URL at the current index.

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.history = [homepage];
  this.current = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.history.length = this.current + 1;
  this.current++;
  this.history.push(url);
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  this.current = Math.max(0, this.current - steps);
  return this.history[this.current];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  this.current = Math.min(this.history.length - 1, steps + this.current);
  return this.history[this.current];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

module.exports = { BrowserHistory };
