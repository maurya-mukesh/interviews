// let arr = [1, 2, 3, 4, 5];

// forEach =========================================
// Array.prototype.forEach = null;
// // arr.forEach((val) => console.log(val * 2));

// if (!Array.prototype.forEach) {
//   Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//       callback(this[i]);
//       // this
//     }
//   };
//   console.log("here is my own forEach");
// }

// arr.myForEach((val) => console.log(val * 2));

// filter =======================
// let arr = [1, 2, 3, 4, 5];
// let value = arr.filter((val) => val % 2 == 0);
// console.log(value);

// Array.prototype.myFilter = function (callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };
// let newValue = arr.myFilter((val) => val % 2 === 0);
// console.log(newValue);

//map =============================================
// let val = [1, 2, 3, 4, 5];
// function hello(val) {
//   return val * 9;
// }

// let mapValue = val.map(hello);
// console.log(mapValue);

// Array.prototype.customMap = function (hello) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     // callback(this[i]);
//     result.push(hello(this[i]));
//   }
//   return result;
// };

// let customMapValue = val.customMap(hello);
// console.log(customMapValue);

// split()=============

// String.prototype.split = null;
// if (!String.prototype.split) {
//   console.log("myCustom split function");

//   String.prototype.split = function (separator) {
//     let responseArr = [];
//     let index = 0;
//     for (let i = 0; i < this.length; i++) {
//       if (separator === "") {
//         responseArr.push(this[i]);
//       }
//       if (this[i] === separator) {
//         responseArr.push(this.slice(index, i));
//         index = i + 1;
//       }
//     }
//     if (separator !== "") {
//       responseArr.push(this.slice(index));
//     }
//     return responseArr;
//   };
// }
// let fruit = "Apple";
// let sentence = "this is apple";

// const fruitRes = fruit.split("");
// console.log(fruitRes);
// const sentenceRes = sentence.split("");
// console.log(sentenceRes);

// prototype repeat ============================================

//forEach
// let arr = [2, 4, 6];
// // function abc(num) {
// //   console.log(num * 2);
// // }
// arr.forEach((val, idx, arr) => {
//   console.log(val * idx);
//   console.log(arr);
// });
// // console.log("=======my=====");

// Array.prototype.myForEach = function (callback) {
//   console.log("my custom function========>");
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
//   return undefined;
// };

// arr.myForEach((val, idx, arr) => {
//   console.log(val * idx);
//   console.log(arr);
// });

// map
// let arr = [3, 4, 6];

// let result = arr.map((val, idx) => val * idx);
// console.log(result);

// Array.prototype.map = null;
// if (!Array.prototype.map) {
//   Array.prototype.map = function (callback) {
//     console.log("this is our map");
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//       let result = callback(this[i], i, this);
//       arr.push(result);
//     }
//     return arr;
//   };

//   let result = arr.map((val, i) => val * i);
//   console.log(result);
// }

// filter
// let arr = [5, 7, 9, 1, 8, 6, 4, 3, 2];
// let filteredResult = arr.filter((ele) => ele % 2 !== 0);
// console.log(filteredResult);

// Array.prototype.myFilter = function (callback) {
//   console.log("my custom filter");
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     let result = callback(this[i], idx);
//     res.push(result);
//   }
//   return res;
// };

// let filteredResult1 = arr.filter((ele) => ele % 2 === 0);
// console.log(filteredResult1);

// let arr = [1, 2, 3, 4, 5];
// let res = arr.reduce((acc, nextValue) => {
//   acc + nextValue;
// }, 0);
// console.log("res=>", res);

// polyfill for map, filter, reduce, split and join==========================================

//map
// let mulByTwo = [1, 2, 3, 4].map((ele) => ele * 2);
// console.log(mulByTwo);

// Array.prototype.myMap = function (callback) {
//   let resp = [];
//   for (let i = 0; i < this.length; i++) {
//     result = callback(this[i], i, this);
//     resp.push(result);
//   }
//   return resp;
// };
// let mulByTwo_ = [1, 2, 3, 4].myMap((ele) => ele * 2);
// console.log(mulByTwo_);

//filter
// function findEven(num) {
//   if (num > 5) {
//     return num;
//   }
// }
// //filter
// let filterEven = [1, 2, 3, 4, 5, 6].filter(findEven);
// console.log(filterEven);

// Array.prototype.myFilter = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     //[1, 2, 3, 4, 5, 6]
//     if (callback(this[i], i, this)) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };

// let filterEven_ = [1, 2, 3, 4, 5, 6].myFilter((ele) => ele > 5);
// console.log(filterEven_);

// let result = [1, 2, 3, 4, 5].reduce((accumulator, nextValue) => {
//   return accumulator + nextValue;
// }, 0);

// console.log(result);

// Array.prototype.myReduce = function (callback, initialValue) {
//   let accumulator = initialValue !== undefined ? initialValue : this[0];
//   let index = initialValue !== undefined ? 0 : 1;
//   for (let i = index; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }
//   return accumulator;
// };

// let result1 = [1, 2, 3, 4, 5].myReduce((accumulator, nextValue) => {
//   return accumulator + nextValue;
// }, 0);

// console.log(result1);

//split

// let string = "hi good evening friends";
// let res = string.split("i");
// console.log("🚀 ~ res:", res);
// String.prototype.mySplit = function (separator) {
//   let result = [];
//   // console.log(separator);
//   // console.log(this);
//   if (separator === undefined || separator.length === 0) {
//     for (let i = 0; i < this.length; i++) {
//       result.push(this[i]);
//     }
//     return result;
//   }
//   let index = 0;
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === separator) {
//       let substring = this.slice(index, i);
//       result.push(substring);
//       index = i + 1;
//     }
//   }
//   let lastSubString = this.slice(index);
//   if (lastSubString.length > 0) {
//     result.push(lastSubString);
//   }
//   return result;
// };

// let string = "mukesh maurya";
// let res = string.mySplit(" ");
// console.log("🚀 ~ res:", res);
// console.log("type of", Array.isArray(res));

// join
// Array.prototype.myJoin = function (separator) {
//   let res = "";
//   if (separator === undefined || separator.length === 0) {
//     for (let i = 0; i < this.length; i++) {
//       res += this[i];
//     }
//   } else {
//     for (let i = 0; i < this.length; i++) {
//       res += this[i];
//       if (separator > 0) {
//         res += separator;
//       }
//     }
//   }
//   return res;
// };

// let string = "my name is khan";
// let result = string.split(" ").join("==");
// console.log("🚀 ~ result:", result);
// console.log("🚀 ~ type:", typeof result);
