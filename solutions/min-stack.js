// Pseudo Code:
// The goal is to implement a MinStack that supports push, pop, top, and retrieving the minimum element in constant time.
// We will use two stacks: one for the main stack and another for tracking the minimum values.

// Class MinStack:
// 1. Initialize two stacks: mainStack and minStack.

// Method push(val):
// 1. Push val onto mainStack.
// 2. If minStack is empty or val is less than or equal to the top of minStack, push val onto minStack.

// Method pop():
// 1. If the top of mainStack is equal to the top of minStack, pop from minStack.
// 2. Pop from mainStack.

// Method top():
// 1. Return the top element of mainStack.

// Method getMin():
// 1. Return the top element of minStack (the minimum value).

var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let temp = [];
  let mini = this.stack[this.stack.length - 1];

  while (this.stack.length > 0) {
    mini = Math.min(mini, this.stack[this.stack.length - 1]);
    temp.push(this.stack.pop());
  }

  while (temp.length > 0) {
    this.stack.push(temp.pop());
  }

  return mini;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = { MinStack };
