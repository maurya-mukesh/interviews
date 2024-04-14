// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation
//     setTimeout(() => {
//       const data = { name: "John", age: 30 };
//       if (data) {
//         resolve({ data }); // Promise is fulfilled with the data
//       } else {
//         reject("Data not found"); // Promise is rejected with an error message
//       }
//     }, 2000);
//   });
// };

// fetchData()
//   .then((data) => {
//     console.log("Data:", data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// /**
//  * @description Quick sort algo
//  * @param {*} arr
//  * @returns sorrted array
//  */

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivot = arr[arr.length - 1];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else rightArr.push(arr[i]);
//   }
//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }

// const originalArr = [2, 1, 6, 99, 3, 4, 2, 6, 0];
// const result = quickSort(originalArr);
// console.log(result);

// let string1 = "mukesh maurya";
// let string = [2, 3, 100, 3, 2, 1];

// console.log(string.sort((a, b) => a - b));
// console.log(string.sort());

// let myObj = {
//   name: "John",
//   age: "45",
//   myMethod: function (role, address) {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(role);
//     console.log(address);
//     // console.log(abc);
//   },
// };
// myObj.myMethod("DEV", "Mumbai");
// let newObj = {
//   name: "vikash",
//   age: 44,
//   id: 22,
// };
// myObj.myMethod.call(newObj, 23, "dev");
// myObj.myMethod.apply(newObj, [74, "delhi"]);
// console.log("===============");
// let newFunc = myObj.myMethod.bind(newObj);
// newFunc();

// let welcomeMsg = "Hello Sumit, Good Morning!";
// let welcomeMsg1 = "Hello Sumitx Good Morningx";

//Output  : Morning! Good, Sumit Hello
//output 1: !gninroM dooG ,stimuS olleH
//output 2: !gninroM dooG ,stimuS olleH
//output 3:  olleH ,timuS dooG !gninroM

// function reverse(string) {
//logic1
// let output = string.split(" ").reverse();
//   let output = string.split(" ").reverse();
//   let value;
//   console.log("🚀 ~ file: demo.js:42 ~ reverse ~ output:", output);
//   let newResult = output.map((word) => {
//     value += word.split("").reverse();
//   });
//   console.log("🚀 ~ file: demo.js:45 ~ newResult ~ value:", value);

//   return newResult;
// }
// let result = reverse(welcomeMsg);
// console.log(result);

// let welcomeMsg = "Hello Sumit, Good Morning!";

// function reverseWords(str) {
//   return str
//     .split(" ") // Split the string into an array of words
//     .map(word => word.split("").reverse().join("")) // Reverse each word in the array
//     .join(" "); // Join the words back into a single string
// }

// let reversedMsg = reverseWords(welcomeMsg);
// console.log(reversedMsg);
