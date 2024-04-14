// let arr = [2,3,4,2,3,8,9,10]

// function factorial(n){ // 5 4 3 2 1
//   if(n===1 || n === 0){
//     return 1
//   }else{
//     return n * factorial(n-1);
//   }
//   // console.log(value)
// }

// console.log(factorial(5))

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[arr.length - 1];
//   const leftArr = [];
//   const rightArr = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }

// // Example usage
// const arr = [2, 3, 4, 2, 3, 8, 9, 10];
// const sortedArr = quickSort(arr);
// console.log("Sorted array:", sortedArr);

// function sortArr(arr){
//   let mid = arr.length/2
//   let left = []
//   let right = []

//   for(let i=0; i<= arr.length-1; i++){
//     if(arr[i]<=mid){

//     }
//     return sortArr(left)+mid+sortArr(right)
//   }
// }
// console.log(sortArr(arr))

// find all duplicate value

// function findDuplicate(arr){
//   let uniqueArr = []
//   let duplicateArray = []
//   for(let i of arr){
//     if(!uniqueArr.includes(i)){
//       uniqueArr.push(i)
//     }
//     duplicateArray.push(i)
//   }
//   console.log(uniqueArr)
//   console.log(duplicateArray)
// }

// findDuplicate(arr)

// const arr = [2, 3, 4, 2, 3, 8, 9, 10];

// function findDuplicates(arr) {
//   const counts = {};
//   const duplicates = [];

//   for (let num of arr) {
//     counts[num] = counts[num] ? counts[num] + 1 : 1;

//     if (counts[num] === 2) {
//       duplicates.push(num);
//     }
//   }

//   return duplicates;
// }

// const duplicateElements = findDuplicates(arr);
// console.log("Duplicate elements:", duplicateElements);

// function sortArr(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let lastNumber = arr[arr.length - 1];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < lastNumber) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }
//   return [...sortArr(leftArr), lastNumber, ...sortArr(rightArr)];
// }

// let arr = [2, 5, 6, 7, 2, 3];
// console.log(sortArr(arr));

// function factorial(n){
//   if(n===1 || n===0){
//     return 1
//   }else{
//     return n*factorial(n-1)
//   }
// }

// arr.forEach(num=>{
//   let value = factorial(num)
//   console.log(value)
// })

// function findDuplicate(arr){
//   let counts={};
//   let duplicate = []
//   for(let num of arr){
//     counts[num]===counts[num]?counts[num]+1 : 1
//   };
//   console.log(counts)
//   console.log(duplicate)
// }
// findDuplicate(arr)

// var window={};
// var obj = {
//   x:100
// }

// window.x = 2050
// var add=function(a,b,c){
//   return this.x+a+b+c;
// }

// var result = add.call(obj,5,2,3)
// console.log(result)

// const arr = [7,2,3]
// var result = add.apply(obj, arr)
// console.log(result)

// var result = add.bind(obj);
// console.log(result(8,1,3))

// const mobiles = [
//   {name:'iphone1', price:333},
//   {name:'iphone2', price:333},
//   {name:'iphone3', price:333},
//   {name:'iphone4', price:333},
//   {name:'iphone5', price:333},
// ]
// var price = mobiles.A{
//   return B;
// }
// console.C

// console.log(60+20+'')
// console.log(+''+60+20);

// let a = 60+20+"";
// let b = +" "+60+20;
// let c = 60+20

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));

// console.log((a));
// console.log((b));
// console.log((c));

// let d = 5**4
// console.log(d)

// function calculatePowerValue(num){
//   function pow(pow){
//     let value = num**pow
//     console.log(value)
//   }
//   return pow;
// }
// const result = calculatePowerValue(5)
// result(3)

// let arr = [1,10000, 44,2,11,89]
// console.log(arr.sort());

// function sortArr(arr){
//   if(arr.length<=1){
//     return arr;
//   }

//   let pivot = arr[arr.length -1]
//   let leftArr = [];
//   let rightArr = [];

//   for(let i=0; i< arr.length-1; i++){
//     if(arr[i]<= pivot){
//       leftArr.push(arr[i])
//     }else{
//       rightArr.push(arr[i])
//     }
//   }
//   return [...sortArr(leftArr), pivot, ...sortArr(rightArr)]
// };

// console.log(sortArr(arr));

// let arr = [111111, 10000, 44, 2, 11, 899999999];

// let maximumNum = arr.reduce((acc, currValue)=>{
//   if(acc>currValue){
//     acc=currValue;
//   }
//   return acc;
// })
// console.log(maximumNum)
// function findMaximumNumber(arr) {
//   let maximumNum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maximumNum) {
//       maximumNum = arr[i];
//     }
//   }
//   return maximumNum;
// }
// console.log(findMaximumNumber(arr));

// function findDuplicateNumbers(arr) {
//   let duplicates = [];
//   let seenNumbers = {};

//   for (let i = 0; i < arr.length; i++) {  //[9, 8, 1, 2, 3, 4, 3, 5, 6, 4, 7, 7, 8];
//     let currentNumber = arr[i];

//     // If the number has been seen before, it's a duplicate
//     if (seenNumbers[currentNumber]) {
//       if (!duplicates.includes(currentNumber)) {
//         duplicates.push(currentNumber);
//       }
//     } else {
//       seenNumbers[currentNumber] = true;
//     }
//   }
//   console.log(duplicates)
//   console.log(seenNumbers)
//   return duplicates;
// }

// let arr = [9, 8, 1, 2, 3, 4, 3, 5, 6, 4, 7, 7, 8];
// console.log(findDuplicateNumbers(arr));


// function findDuplicateNumber(arr){
//   let duplicateArr = [];
//   let uniqueCheck = {};

//   for(let i=0; i<arr.length; i++){
//     let currentEle = arr[i];
//     if(uniqueCheck[currentEle]){
//       if(!duplicateArr.includes(arr[i])){
//         duplicateArr.push(arr[i])
//       }
//     }else{
//       uniqueCheck[currentEle] = true
//     }
//   };
//   // delete uniqueCheck;
//   console.log(uniqueCheck)
//   return duplicateArr
// };

// let arr = [5,5,7,6,2,3,4,2,3,6,8,9];
// const duplicate = findDuplicateNumber(arr);
// console.log(duplicate)