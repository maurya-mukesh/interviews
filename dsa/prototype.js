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

let arr = [1, 2, 3, 4, 5];
function myFun(acc, next){
  return acc+next
}
const reduceVal = arr.reduce(myFun, 0);

console.log(reduceVal);
Array.prototype.myReduce=function(callback, initialVal){
  let accumulator;
  let nextValue;
  accumulator = initialVal !== undefined ? initialVal: this[0];
  nextValue = initialVal !== undefined ? this[1]: this[0]
  for(let i=nextValue+1; i<this.length; i++){
    
  }


  return callback(acc, next)
}
