// "use strict";
// (function(){
//   var a = b = 3;
// })();

// console.log("a defined? " + (typeof a ));
// console.log("b defined? " + (typeof b ));

// var myObject = {
//   foo: "bar",
//   func: function() {
//       var self = this;
//       console.log("outer func:  this.foo = " + this.foo); //"bar"
//       console.log("outer func:  self.foo = " + self.foo); //"bar"
//       (function() {
//           console.log("inner func:  this.foo = " + this.foo); // undefined
//           console.log("inner func:  self.foo = " + self.foo); // "bar"
//       }());
//   }
// };
// myObject.func();

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }

// console.log("foo1 returns:");
// console.log(foo1());
// console.log("foo2 returns:");
// console.log(foo2());

// console.log(0.1 + 0.2); // 0.300000004
// console.log(0.1 + 0.2 == 0.3); //false

// function areTheNumbersAlmostEqual(num1, num2) {
// 	return Math.abs( num1 - num2 ) < Number.EPSILON;
// }
// console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));

// (function() {
//   console.log(1);  // 1
//   setTimeout(function(){console.log(2)}, 1000); //2
//   setTimeout(function(){console.log(3)}, 0); //3
//   console.log(4); //4
// })();
//output => 1, 4, 3, 2

// function isPalindrome(str) {
// Remove non-alphanumeric characters and convert to lowercase
// const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

// Compare the cleaned string with its reverse
// return cleanedStr === cleanedStr.split('').reverse().join('');
// return str === str.split('').reverse().join('');
// }

// Example usage
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello world")); // Output: false

// function sum(x, y) {
//   if (y !== undefined) {
//     return x + y;
//   } else {
//     return function(y) { return x + y; };
//   }
// }

// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// var arr1 = "john".split(''); // ['j', 'o', 'h', 'n'] ==>
// var arr2 = arr1.reverse(); // ['n', 'h', 'o', 'j']
// var arr3 = "jones".split(''); // [j,o,n,e,s]
// arr2.push(arr3); // [n,h,o,j,[j,o,n,e,s]]
// console.log('LOG ~ file: 37Essential.js:88 ~ arr1:', arr1);
// console.log('LOG ~ file: 37Essential.js:90 ~ arr2:', arr2);
// console.log('LOG ~ file: 37Essential.js:92 ~ arr3:', arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); // 4 last n
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// console.log(arr3.slice(3,7))

// console.log(1 +  "2" + "2"); // 122
// console.log(1 +  +"2" + "2"); // 32
// console.log(1 +  -"1" + "2"); // 02
// console.log(+"1" +  "1" + "2"); //112
// console.log( "A" - "B" + "2"); //NaN2
// console.log( "A" - "B" + 2); // NaN

// console.log((0 || 1)); // 1
// console.log((1 || 2)); // 1
// console.log((0 && 1)); // 0
// console.log((1 && 2)); // 2

// console.log(false == '0') // true
// console.log(false === '0') // false

// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);//123

// console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10)); factorialOf10

// (function(x) {
//   return (function(y) {
//       console.log(x);
//   })(2)
// })(1);
// 1

// var hero = {
//   _name: 'John Doe',
//   getSecretIdentity: function (){
//       return this._name;
//   }
// };

// var stoleSecretIdentity = hero.getSecretIdentity;
// // var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

// console.log(stoleSecretIdentity()); // undefine
// console.log(hero.getSecretIdentity()); // undefine

// 24. Testing your this knowledge in JavaScript: What is the output of the following code?

// var length = 10;
// function fn() {
// 	console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);

// (function () {
//   try {
//       throw new Error();
//   } catch (x) {
//       var x = 1, y = 2;
//       console.log(x); //1
//   }
//   console.log(x); //undefined
//   console.log(y); //undefined
// })();

// What will be the output of this code?

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();

// var x = 21;
// var girl = function () {
//     var x;  // Declare the local variable x
//     console.log(x);  // Output: undefined
//     x = 20;  // Assign a value to the local variable x
// };
// girl();

// var x = 21;
// var girl = function () {
//     console.log(x);  // Output: 21 (accesses the global variable x)
//     var x = 20;  // Assign a value to the local variable x
// };
// girl();

// var x = 21;
// var girl = function () {
//     console.log(x);  // Output: 21 (accesses the global variable x)
// };
// girl();

// console.log(x); // Throws ReferenceError
// console.log(y); // Throws ReferenceError

// var x = 10;
// const y = 20;

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() { console.log(i); }, i * 1000 ); //0, 1, 2, 3, 4
// }

// console.log(1 < 2 < 3); //
// console.log(3 > 2 > 1); //

// Imagine you have this code:
// var a = [1, 2, 3];
// //a. Will this result in a crash?
// a[10] = 99; //no crash
// //b. What will this output?
// console.log(a[6]); // undefined
// console.log(a); // undefined

// console.log(typeof undefined == typeof NULL)
// console.log(typeof typeof 1); //

// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }

// "use strict";
// console.log(typeof NaN)
// console.log(NaN === NaN)
// console.log(NaN == NaN)
// console.log(NaN != NaN)
// console.log(NaN !== NaN)

// console.log(isNaN(NaN))

// What will the following code output and why?
// var b = 1; // 3
// function outer() {
//   var b = 2;
//   function inner() {
//     b++;
//     var b = 3;
//     console.log(b); //3
//   }
//   inner();
// }
// outer();

// console.log(Number.isInteger(2.4))
// console.log(typeof(2.4))

// let obj = {
//   name:"Mukesh",
//   age:34
// }
// let cloneObj = Object.assign({}, obj)
// console.log('LOG ~ file: 37Essential.js:258 ~ cloneObj:', cloneObj);
// console.log(typeof(cloneObj))

// let arr = [1,2,3,4,5]
// console.log(typeof arr)

// let string = "hello";
// console.log(Array.isArray(string))

// if (Math.random() > 0.5) {
//   var x = 1;
// } else {
//   var x = 2;
// }
// console.log(x);

// console.log(2 * '3' - '2');
// console.log([1, 2] + [3, 4]);

// [1,2,3,4].reduce((x,y)=>console.log(x,y))

// function printArray(a){
//   var len = a.length, i=0;
//   if(len==0) {
//     console.log("empty array");

//   }
//   else{
//     do{
//       console.log(a[i])
//     }
//     while
//       (++i<len)
//   }
// }

// printArray([])

// console.log(Promise.resolve(5));

// async function* range(start, end){
//   for(let i=start; i<= end; i++){
//     yield Promise.resolve(i);
//   }
// }

// (async ()=>{
//   const gen = range(1,3);
//   for await (const item of gen){
//     console.log(item)
//   }
// })();
// config=null;

// async function getData(){
//   return await Promise.resolve('I Made it');
// };

// const data = getData();
// console.log(data)

// let arr = [
//   {
//     "name":"muakesh",
//     "old":true
//   },
//   {
//     "name":"muakesh123",
//     "old":false
//   }
// ]

// let value = arr.map(item=>JSON.parse(item));
// let result = value.filter(item=> !item.old)

// console.log(result)

// let books = [{"title":"Bill Gates","author":"The Road Ahead","readingStatus":true},{"title":"Steve Jobs","author":"Walter Isaacson","readingStatus":true},{"title":"Mockingjay: The Final Book of The Hunger Games","author":"Suzanne Collins","readingStatus":false}]

// function getInfo(obj) {
//   const booksData = JSON.parse(obj);
//   const unreadBooks = booksData.filter(book => !book.readingStatus);

//   unreadBooks.forEach(book => {
//     console.log(`${book.title}-${book.author}`);
//     // console.log(`Author: ${book.author}`);
//     // console.log("--------------");
//   });
// }

// getInfo(JSON.stringify(books));

//Closure concept

// function outerFun(x){
//   function innerFun(y){
//     console.log(x+y)
//     console.log(x)
//     console.log(y)
//     // console.log(xy)
//   };
//   return innerFun;
// };

// const closuer1 = outerFun(3);
// const closuer2 = outerFun(4)

// closuer1(7);
// closuer2(9)

// const personDetails = {
//   name:"Mukesh",
//   age:23,
//   role:"developer"
// }
// let obj = {
//   age:40,
//   name:"John"
// }
// personDetails=obj;
// // personDetails.role = "Manager"
// console.log(personDetails)

// "use strict"
// let personDetails = {
//   name: 'Mukesh',
//   age: 23,
//   role: 'developer',
// };

// Object.freeze(personDetails);
// personDetails.role="Manager"
// console.log(personDetails)

// var Employee = function (name, company, salary) {
//   this.name = name || "";       //Public attribute default value is null
//   this.company = company || ""; //Public attribute default value is null
//   this.salary = salary || 5000; //Public attribute default value is null

//   // Private method
//   var increaseSalary = function () {
//     this.salary = this.salary + 1000;
//   };

//   // Public method
//   this.dispalyIncreasedSalary = function() {
//     increaseSalary();
//     console.log(this.salary);
//   };
// };

// // Create Employee class object
// var emp1 = new Employee("John","Pluto",3000);
// // Create Employee class object
// var emp2 = new Employee("Merry","Pluto",2000);
// // Create Employee class object
// var emp3 = new Employee("Ren","Pluto",2500);

// const arr = [1, 2, 3, 4, 5, 3, 7, 5, 3, 9, 3];

// const sumOfArr = arr.reduce((accumulator, currentValue, currentIndex, oldArr) => {
//   console.log(accumulator);
//   console.log(currentValue);
//   console.log(currentIndex);
//   console.log(oldArr);
//   return accumulator + currentValue;
// });
// console.log('result', sumOfArr);
// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }

// var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");
// console.log('LOG ~ file: 37Essential.js:433 ~ reverseEntireSentence:', reverseEntireSentence);
// var reverseEntireSentence1 = reverseBySeparator(reverseEntireSentence, " ");
// console.log('LOG ~ file: 37Essential.js:435 ~ reverseEntireSentence1:', reverseEntireSentence1);

// // Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
// console.log('LOG ~ file: 37Essential.js:434 ~ reverseEachWord:', reverseEachWord);


for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}