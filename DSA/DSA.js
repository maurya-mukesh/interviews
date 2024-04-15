// // check equal opening and closing parenthesis [{()}]

// const checkParenthesis = (string) => {
//   let map = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };
//   let stack = [];
//   for (let i = 0; i <= string.length; i++) {
//     let char = string[i];
//     if (map[char]) {
//       stack.push(char);
//     } else {
//       let top = stack.pop();
//       if (map[top] !== char) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };

// let string1 = "[[]]";
// let string2 = "[[}]]";
// let string3 = "[{}()[(){}]]";
// let string4 = "(]})[}";

// let result1 = checkParenthesis(string1);
// let result2 = checkParenthesis(string2);
// let result3 = checkParenthesis(string3);
// let result4 = checkParenthesis(string4);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

let obj = {
  name: "mukesh",
  age: 30,
  role: "dev",
};

// let keys = Object.keys(obj);
// let value = Object.values(obj);
// console.log("🚀 ~ value:", value);
// console.log("🚀 ~ keys:", keys);

// let [keys, values] = Object.entries(obj);
let entry = Object.entries(obj);
let output = [];
let keys = [];
let values = [];
for (let [key, value] of entry) {
  keys.push(key);
  values.push(value);
}
output.push(keys, values);
console.log(output);
