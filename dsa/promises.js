// console.log("start");

// function printMe(message, callback) {
//   setTimeout(() => {
//     callback(message);
//   }, 5000);
// }
// let res = printMe("hello world", (message) => console.log("new", message));
// // console.log(res);
// console.log("end");

// let myPromise = new Promise((resolve, reject) => {
//   let random = Math.ceil(Math.random() * (10 - 1));
//   if (random < 5) {
//     resolve(`then number is ${random} is less then 5`);
//   } else {
//     reject(new Error(`the number ${random} is greater then 5`));
//   }
// });

// const myFun = async () => {

//   let res = await myPromise;
//   if (res.Error) {
//     console.log("failed case", res.reject);
//   } else {
//     console.log("success case", res.resolve);
//   }
// };
// myFun();

// let selectProduct = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("product selected");
//   }
//   reject("product not find useful");
// });
// let addToCart = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("product added in cart");
//   }
//   reject("reject");
// });
// let checkout = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("checkout");
//   }
//   reject("checkout failed");
// });
// let madePayment = new Promise((resolve, reject) => {
//   if (false) {
//     resolve("order Placed");
//   }
//   reject("order not placed");
// });

// selectProduct
//   .then((res) => {
//     console.log(res);
//     return addToCart;
//   })
//   .then((res) => {
//     console.log(res);
//     return checkout;
//   })
//   .then((res) => {
//     console.log(res);
//     return madePayment;
//   })
//   .then((res) => {
//     console.log("success state==>", res);
//   })
//   .catch((err) => console.log("error state==>", err));

// Promise.any([selectProduct, addToCart, checkout, madePayment])
//   .then((res) => console.log("success state", res))
//   .catch((err) => console.log("fail state=>", err));
