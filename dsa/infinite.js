// // Q.1: Palindrome number; input: x= 121 => true, y=120 => false
// function checkPalindromeNumber(num) {
//   let numStr = Math.abs(num).toString();
//   // if (numStr === numStr.split("").reverse().join("")) {
//   //   return true;
//   // }
//   // return false;

//   //1 2 3 4 5 4 3 2 1
//   //0 1 2 3 4 5 6 7 8
//   let i = 0;
//   let j = numStr.length - 1;
//   console.log(j);

//   while (i < j) {
//     if (numStr[i] !== numStr[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// }
// let res = checkPalindromeNumber(-123454321);
// console.log("🚀 ~ res:", res);

// Q.2: Fibonacci Number
// var fib = function (n) {
//   let dp = new Array(5).fill(-1);
//   dp[0] = 0;
//   dp[1] = 1;
//   console.log(dp);
//   for (let i = 2; i < n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//     console.log(dp);
//   }
//   return dp[n];
// };

// console.log(fib(5));

