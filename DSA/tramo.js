// const path = require("path");
// var p1 = "C://users/javascript/test_script.js";
// var p2 = "C:\\users\\call.cmd";
// var p3 = "./one.js";
// var p5 = "../two.js";
// var p4 = "/users/javaS";

// console.log(p1.split(path.sep));
// console.log(p2.split(path.sep));
// console.log(path.resolve(p4, p3));
// console.log(path.resolve(p4, p5));
// console.log(p1.split(path.sep));

// function resolveValue(number) {
//   return new Promise((resolve, reject) => {
//     if (number < 5) {
//       return resolve("success: number is less then  5");
//     }
//     return reject("Rejected: number is greater then 5");
//   });
// }

// // console.log(resolveValue)u;
// resolveValue(3)
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

// const fs = require("fs");

// function readFile(filePath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) {
//         reject("Error reading the file");
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// // Example usage:
// const filePath = "/home/kartikeya/Desktop/SuccessiveTech/filename.txt";
// readFile(filePath)
//   .then((data) => {
//     console.log("===> read file", data); // Output: Content of the file
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// const fs = require("fs");
// const data = "This is the content to be written to the file.";

// function writeFile(data) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(myNewFile.txt, data, "utf8", (err, res) => {
//       if (err) {
//         return reject(err);
//       }
//       return resolve("file successfully written", res);
//     });
//   });
// }

// writeFile(data)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const fs = require("fs");
// const data = "This is the content to be written to the file.";

// function writeFile(data) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile("example.txt", data, { encoding: "utf8" }, (err) => {
//       if (err) {
//         return reject(err);
//       }
//       return resolve("File successfully written!");
//     });
//   });
// }

// writeFile(data)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const fs = require("fs");

// const content = "Some content!";

// try {
//   fs.writeFile("./filename.txt", content);
//   // file written successfully
// } catch (err) {
//   console.error(err);
// }
