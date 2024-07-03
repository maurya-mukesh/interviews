/**
 * @Question 1 : Polyfill of call
 */

// let accountHolder = {
//   name: "Mukesh",
//   balance: 200,
//
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
 * @Question 2 : Polyfill of apply
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
 * @Question 3 : Polyfill of bind
 */
/**
 * @Question 4 : Polyfill of promise
 */
/**
 * @Question 5 : Polyfill of promise.all
 */

// const functionOne = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			let random = Math.floor(Math.random() * 10);
// 			if (random > 5) resolve(random);
// 			else reject("number is greater less 5");
// 		}, 100);
// 	});
// };

// const functionTwo = () => {
// 	return new Promise((resolve, reject) => {
// 		resolve(500);
// 	});
// };

// Promise.all([functionOne(), functionTwo()])
// 	.then((res) => console.log(res))
// 	.catch((error) => console.log(error));

// Promise.myAllFun = function (promiseArr) {
// 	return new Promise((resolve, reject) => {
// 		if (!Array.isArray(promiseArr)) return "arguments should be array of promise";
// 		let result = [];
// 		let completedCount = 0;
// 		promiseArr.forEach((promise, idx) => {
// 			Promise.resolve(promise)
// 				.then((res) => {
// 					result[idx] = res;
// 					completedCount++;
// 					if (completedCount === promiseArr.length) {
// 						resolve(result);
// 					}
// 				})
// 				.catch((error) => {
// 					reject(error);
// 				});
// 		});
// 	});
// };

// Promise.myAllFun([functionOne(), functionTwo()])
// 	.then((res) => console.log("myAllFun res=>", res))
// 	.catch((error) => console.log("myAllFun error=>", error));

/**
 * @Question 6 : Polyfill of promise.race
 */
/**
 * @Question 7 : Polyfill of promise.allSettled
 */
/**
 * @Question 8 : Polyfill of split
 */
/**
 * @Question 9 : Polyfill of join
 */
/**
 * @Question 10 : Polyfill of map
 */

// Array.prototype.myMap = function (callback) {
// 	if (!Array.isArray(this)) return "myMap will work on arrays only";
// 	let result = [];
// 	for (let i = 0; i < this.length; i++) {
// 		let value = callback(this[i], i, this);
// 		result.push(value);
// 	}
// 	return result;
// };

// let result = [1, 2, 3, 4, 5].myMap((ele) => ele * 5);
// console.log(result);
/**
 * @Question 11 : Polyfill of reduce
 */
/**
 * @Question 12 : Polyfill of filter
 */
Array.prototype.myFilter = function (callback) {
	let arr = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			arr.push(this[i]);
		}
	}
	return arr;
};

let filterResult = [1, 2, 3, 4, 5, 6, 7, 8].myFilter((ele) => ele % 2 === 0);
console.log(filterResult);

// Strange filter
const context = {
	prefix: "B",
	startsWithPrefix: function (str) {
		return str.startsWith(this.prefix);
	},
};

const strings = ["Apple", "Banana", "Avocado", "Apricot", "Blueberry"];

// Using native filter method with thisArg
const filteredStrings = strings.myFilter((ele) => ele.startsWith("A"));
console.log(filteredStrings);
