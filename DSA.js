// check equal opening and closing parenthesis [{()}]

const checkParenthesis = (string) => {
  let map = {
    "(": "(",
    "{": "{",
    "[": "[",
  };
  let stack = [];
  for (let i = 0; i <= string.length; i++) {
    let chat = string[i];
    if (map[char]) {
      stack.push(char);
    } else {
      let top = stack.pop();
      
    }
  }
};

let string1 = "[[]]";
let string2 = "[[}]]";
let string3 = "[()[{}}]]";
let string4 = "(]})[}";

let result1 = checkParenthesis(string1);
let result2 = checkParenthesis(string2);
let result3 = checkParenthesis(string3);
let result4 = checkParenthesis(string4);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
