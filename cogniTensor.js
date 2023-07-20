// console.log(Symbol('a') == Symbol('a'))

// var removeDuplicates = function(nums) {
//   let uniqueArr = [];
//   for(let ele of nums){
//     if(!uniqueArr.includes(ele)){
//       uniqueArr.push(ele)
//     }
//   };
//   return uniqueArr;

// };

// let result = removeDuplicates([1,1,2]);
// console.log(result)

// function maxProfit(prices) {
//   let maxProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > prices[i - 1]) {
//       maxProfit += prices[i] - prices[i - 1];
//     }
//   }

//   return maxProfit;
// }

// // Example usage:
// const prices = [100, 180, 260, 310, 40, 535, 695];
// const profit = maxProfit(prices);
// console.log(profit);

// const numbers = ["10", 20, 50, "120", 60, 'FIVE'];
// console.log(Math.min.apply(null, numbers));
// console.log(Math.max.apply(null, numbers));

// let arr =[10,1,-10,5,-5,7,45,7,9,2,3,5,5,8,4,7,8,9,0];

// function sortNumber(arr) {
//     if(arr.length<=1){
//         return arr
//     };
//     // let count =
//     // let repeatElement = {}

//     let lastNumber = arr[arr.length-1];
//     let leftArr = [];
//     let rightArr = [];

//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i]<lastNumber){
//             leftArr.push(arr[i])
//         }else rightArr.push(arr[i])
//     };
//     return [...sortNumber(leftArr),lastNumber,...sortNumber(rightArr)]
// }

// let result = sortNumber(arr);
// console.log(result);

// function fundUnique (arr){
//     let checkDuplicate = {};
//     let duplicateElement = []
//     let count  = 0
//     for(let i=0; i<arr.length; i++){
//         if(!checkDuplicate[arr[i]]){
//             if(!duplicateElement.includes(arr[i])){
//                 duplicateElement.push(arr[i])
//             }
//             checkDuplicate[arr[i]] = count+1
//         }
//     }
//     console.log(checkDuplicate);
//     console.log(duplicateElement)
// };

// fundUnique(arr)

// function findUnique(arr) {
//     let checkDuplicate = {};
//     let duplicateElement = [];
//     let count = 1;

//     for (let i = 0; i < arr.length; i++) {
//       if (!checkDuplicate[arr[i]]) {
//         if (!duplicateElement.includes(arr[i])) {
//           duplicateElement.push(arr[i]);
//         }
//         checkDuplicate[arr[i]] = count + 1;
//       }
//     }

//     console.log(checkDuplicate);
//     console.log(duplicateElement);
//   }

//   // Example usage
//   var array = [5, 2, 8, 2, 5, 9, 1, 3, 5, 2];
//   findUnique(array);

// let myObj = {
//     1:3,
//     2:5,
//     5:7
// }
// myObj[5]+=1
// console.log(myObj)

// function findDuplicateCount(arr) {
//   if(arr.length<= 1){
//     return arr
//   }
//   let duplicateObj = {};
//   let uniqueElement = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!duplicateObj[arr[i]]) {
//       duplicateObj[arr[i]] = 1;
//       if (!uniqueElement.includes(arr[i])) {
//         uniqueElement.push(arr[i]);
//       }
//     } else {
//       duplicateObj[arr[i]] += 1;
//     }
//   }
//   return { duplicateObj, uniqueElement};
// }
// const arr = [5,5,5,5,5,5,5,5,5,5,5,5,1];
// const result = findDuplicateCount(arr);
// console.log("🚀 ~ file: demo.js:93 ~ result:", result);

// let arr =[10,1,-10,5,-5,7,45,7,9,2,3,5,5,8,4,7,8,9,0];

// function sortNumber(arr) {
//     if(arr.length<=1){
//         return arr
//     };
//     // let count =
//     // let repeatElement = {}

//     let lastNumber = arr[arr.length-1];
//     let leftArr = [];
//     let rightArr = [];

//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i]<lastNumber){
//             leftArr.push(arr[i])
//         }else rightArr.push(arr[i])
//     };
//     return [...sortNumber(leftArr),lastNumber,...sortNumber(rightArr)]
// }

// let result = sortNumber(arr);
// console.log(result);

// function fundUnique (arr){
//     let checkDuplicate = {};
//     let duplicateElement = []
//     let count  = 0
//     for(let i=0; i<arr.length; i++){
//         if(!checkDuplicate[arr[i]]){
//             if(!duplicateElement.includes(arr[i])){
//                 duplicateElement.push(arr[i])
//             }
//             checkDuplicate[arr[i]] = count+1
//         }
//     }
//     console.log(checkDuplicate);
//     console.log(duplicateElement)
// };

// fundUnique(arr)

// function findUnique(arr) {
//     let checkDuplicate = {};
//     let duplicateElement = [];
//     let count = 1;

//     for (let i = 0; i < arr.length; i++) {
//       if (!checkDuplicate[arr[i]]) {
//         if (!duplicateElement.includes(arr[i])) {
//           duplicateElement.push(arr[i]);
//         }
//         checkDuplicate[arr[i]] = count + 1;
//       }
//     }

//     console.log(checkDuplicate);
//     console.log(duplicateElement);
//   }

//   // Example usage
//   var array = [5, 2, 8, 2, 5, 9, 1, 3, 5, 2];
//   findUnique(array);

// let myObj = {
//     1:3,
//     2:5,
//     5:7
// }
// myObj[5]+=1
// console.log(myObj)

// function findDuplicateCount(arr) {
//   if(arr.length<= 1){
//     return arr
//   }
//   let duplicateObj = {};
//   let uniqueElement = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!duplicateObj[arr[i]]) {
//       duplicateObj[arr[i]] = 1;
//       if (!uniqueElement.includes(arr[i])) {
//         uniqueElement.push(arr[i]);
//       }
//     } else {
//       duplicateObj[arr[i]] += 1;
//     }
//   }
//   return { duplicateObj, uniqueElement};
// }
// const arr = [5,5,5,5,5,5,5,5,5,5,5,5,1];
// const result = findDuplicateCount(arr);
// console.log("🚀 ~ file: demo.js:93 ~ result:", result);

// let arr = [2, 3, 5, 1, 2, 0, 9, 2, 4];

// // fulet arr = [2, 3, 5, 1, 2, 0, 9, 2, 4];

// function sortDescendingOrder(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let firstEle = arr[0];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < firstEle) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }
//   return [
//     ...sortDescendingOrder(leftArr),
//     firstEle,
//     ...sortDescendingOrder(rightArr),
//   ];
// }
// let resultValue = sortDescendingOrder(arr);
// console.log("🚀 ~ file: demo.js:24 ~ resultValue:", resultValue);
