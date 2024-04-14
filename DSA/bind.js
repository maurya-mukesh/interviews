let person = {
  name: "mukesh",
  age: "23",
};
let person2 = {
  name: "Rakesh",
  age: "23",
};

function myFunc() {
  return `${this.name} is ${this.age} year old.`;
}

let result = myFunc.bind(person2);
console.log("🚀 ~ result:", result());

console.log(myFunc())

