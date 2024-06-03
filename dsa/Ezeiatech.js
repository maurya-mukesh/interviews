// Question 1: Write a custom promise, promise.all, promise.race, promise.allSettled.
// Question 2: "xyxmmnnmmooppoo" - Largest Palindrome substring.
// Question 3: How nodejs handle multiple concurrent request.

// 0,1,1,2,3,5,8,13,21,34

// console.timeStamp("fib");

// function fibByDP(n) {
//   if (n < 0) return "error";
//   let count = 0;

//   let memo = Array(n + 1).fill(null);
//   memo[0] = 0;
//   memo[1] = 1;
//   console.log(memo);
//   function fib(n) {
//     if (memo[n] !== null) {
//       return memo[n];
//     }
//     count++;
//     if (n == 0) return 0;
//     if (n == 1) return 1;
//     let sum = fib(n - 2) + fib(n - 1);
//     memo[n] = sum;
//     return sum;
//   }
//   let result = fib(n);
//   console.log("count", count);
//   console.log(memo);
//   return result;
// }

// let result = fibByDP(5);
// console.log(result);

//============ bottom up method ========

// function fib(n) {
//   let memoArr = Array(n + 1).fill(-1);
//   memoArr[0] = 0;
//   memoArr[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     memoArr[i] = memoArr[i - 1] + memoArr[i - 2];
//   }
//   console.log(memoArr);
//   return memoArr[n];
// }
// console.log(fib(10));

//==============================

// function fib(n) {
//   if (n < 0) {
//     return "error";
//   }
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(10));

// //=======================

// function fin(n) {
//   if (n < 0) return "error";
//   let arr = Array(n + 1).fill(-1);
//   arr[0] = 0;
//   arr[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   return { finSeriesArr: arr, finOfN: arr[n] };
// }
// console.log(fin(10));

// ============bottom up method ==============

// function fib2(n) {
//   let memo = Array(n + 1).fill(null);
//   memo[0] = 0;
//   memo[1] = 1;
//   function fib(n) {
//     if (memo[n] !== null) {
//       return memo[n];
//     }
//     if (n == 0) return 0;
//     if (n == 1) return 1;
//     let res = fib(n - 2) + fib(n - 1);
//     memo[n] = res;
//     return res;
//   }
//   // let res = fib(n);
//   console.log(memo);
//   return fib(n);
// }

// console.log("fib2", fib2(10));
