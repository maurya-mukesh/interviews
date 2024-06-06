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

// 