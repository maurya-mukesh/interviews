const obj = {
  name: "mukesh",
  age: "23",
  intro: function (arg) {
    return `Hi my name is ${this.name} and im ${this.age} year old. and  i'm ${arg}`;
  },
};

const newObj = {
  name: "mohan",
  age: "33",
};

const newObj1 = {
  name: "Vivek",
  age: "93",
};

let invoke = obj.intro();
console.log(invoke)
let callFun = obj.intro.apply(newObj, ['cricketer']);
console.log(callFun);
let call2 = obj.intro.apply(newObj1,['mukesh'])
console.log(call2)
