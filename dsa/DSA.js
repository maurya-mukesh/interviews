// function numToRoman(num) {
//   let result = "";
//   let roman = [
//     { num: 100, roman: "C" },
//     { num: 90, roman: "XC" },
//     { num: 50, roman: "L" },
//     { num: 40, roman: "XL" },
//     { num: 10, roman: "X" },
//     { num: 9, roman: "IX" },
//     { num: 4, roman: "IV" },
//     { num: 1, roman: "I" },
//   ];
//   console.log(roman.length);
//   if (num > roman[0].num || num < roman[roman.length - 1].num) {
//     return "Outside of the range";
//   }
//   for (let i = 0; i < roman.length; i++) {
//     while (num >= roman[i].num) {
//       result += roman[i].roman;
//       num -= roman[i].num;
//     }
//   }
//   return result;
// }

// let num = 33;
// const result = numToRoman(num);
// console.log(result);

// const numToRoman = (num) => {
//   let result = "";
//   let map = { C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
//   if (num < 1 || num > 100) {
//     return "out of range";
//   }
//   for (let i in map) {
//     while (num >= map[i]) {
//       result += i;
//       num -= map[i];
//     }
//   }
//   return result;
// };
// for (let i = 0; i <= 100; i++) {
//   console.log(`${i}.`, numToRoman(i));
// }

// Quick sort
// function quickSort(arr) {
//   if (arr.length <= 1) return arr;
//   let pivot = arr[arr.length - 1];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > pivot) {
//       rightArr.push(arr[i]);
//     } else {
//       leftArr.push(arr[i]);
//     }
//   }
//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }

// let sortedArr = quickSort([1, 2, 1, 4, 3, 8, 4, 0, 3]);
// console.log(sortedArr);

// let users = [
//   { name: "mukesh", active: true, age: 29 },
//   { name: "Vinay", active: true, age: 22 },
//   { name: "Abhi", active: false, age: 33 },
//   { name: "Anand", active: true, age: 19 },
//   { name: "Ankur", active: false, age: 23 },
//   { name: "Gunjan", active: true, age: 22 },
// ];

// let result = users
//   .filter((user) => user.active)
//   .sort((a, b) => a.age - b.age)
//   .map((ele) => ele.name);

// console.log(result);

// console.log("begin with log1");

// setImmediate(() => console.log("setImmediate called"));
// let promise = new Promise((resolve, reject) => {
// 	resolve(4);
// 	console.log("promise Resolved");
// });

// promise.then((res) => console.log("==>", res));

// process.nextTick(() => console.log("next tick called"));
// console.log("end");
