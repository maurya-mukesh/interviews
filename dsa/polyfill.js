/**
 * @Question 1 : Polyfill of call
 */

// let accountHolder = {
//   name: "Mukesh",
//   balance: 200,
// };

// function deposit(amount) {
//   this.balance += amount;
//   return this.balance;
// }

// Function.prototype.myCall = function (context = {}, ...args) {
// if (typeof this !== "function") {
//   return this + " is not a function";
// }
//   context.myFun = this;
//   return context.myFun(...args);
// };

// let res = deposit.myCall(accountHolder, 300);
// console.log(res);

/**
 * @Question 1 : Polyfill of apply
 */

// let accountHolder = {
//   name: "Mukesh",
//   balance: 200,
//   by: "mukesh",
// };

// function deposit(amount, by) {
//   this.balance += amount;
//   return amount + " deposit by" + by + "total balance is: " + this.balance;
// }

// Function.prototype.myApply = function (context = {}, argsArr) {
//   if (typeof this !== "function") return this + "is not function";
//   if (!Array.isArray(argsArr)) return argsArr + "is not an array";
//   context.myFun = this;
//   return context.myFun(...argsArr);
// };

// let res = deposit.myApply(accountHolder, [300, "Anil"]);
// console.log(res);

/**
 * @Question 1 : Polyfill of bind
 */
