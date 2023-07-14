// let person = {
//   name:"Mukesh",
//   age:30,
//   salary:100
// }

// function showDetails(arg){
//   console.log(`${this.name} is ${this.age} years ols and his salary ${this.salary}, and now ${arg()}`)
// }

// function printSalary(){
//   console.log(`1000`)
// }
// showDetails.call(person, printSalary)
// showDetails.call(person, setInterval(()=>{console.log(person.alary+=100)},100))

// function greet() {
//   console.log(`Hello, ${this.name}!`);
// }

// function introduce(greeting) {
//   console.log(`${greeting}, I am ${this.name}.`);
// }

// const person = { name: 'John' };

// greet.call(person); // Output: Hello, John!
// introduce.call(person, greet); // Output: Hello, John!

// 1. Question one: factorial of n, n is a positive number
// 2. find even number of array and return array 
// 3. find the maxNumber of array
// 4. find the reverse of string

// Ques.1 : Question one: factorial of n
// #method 1st
// -----------------
// function factorialOfN(n){
//   let result = 1;
//   for (let i=n; i>=1; i--) { //
//     result = result*i
//   };
//   return result
// }

// let n = 15;
// const result = factorialOfN(n);
// console.log(result)

// #method 2st
// -----------------
// function factorialOfN(n) {
//   if(n===0 || n===1){
//     return 1
//   }
//   return n * factorialOfN(n-1)
// }

// let n = 5;
// const result = factorialOfN(n);
// console.log(result);

// Ques.2 : find even number of array and return array of even number
// #method 1st
// -----------------
// function findEvenNumber(arr) {
//   let ev enNumberArray = [];
//   arr.filter((num) => {
//     if(num % 2 == 0){
//       evenNumberArray.push(num)
//     };
//   });
//   return evenNumberArray;
// }

// const arr = [2, 7, 9, 2, 3, 4, 8];
// let evenNumberArr = findEvenNumber(arr);
// console.log(evenNumberArr);

// #method 2nd

// function findEvenNumber(arr) {
//   let evenNumber = []
//   for(let i=0; i<= arr.length; i++){
//     if(arr[i]%2 === 0){
//       evenNumber.push(arr[i])
//     }
//   }
//   return evenNumber
// }

// const arr = [2, 7, 9, 2, 3, 4, 8];
// let evenNumberArr = findEvenNumber(arr);
// console.log(evenNumberArr);


// function findEvenNumbers2(arr) {
//   let newArr =  arr.filter(num => num % 2 === 0);
//   return newArr;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers2 = findEvenNumbers2(numbers);
// console.log(evenNumbers2);


// 3. find the maxNumber of array

// function findMaxNumber(arr){
//   return Math.max(...arr)
// };

// const arr = [2,3,7,9,2,11];
// const result = findMaxNumber(arr);
// console.log(result)


// function findMaxNumber(arr){
//   let maxNumber= 0;
//   for(let i of arr){
//     if(i>maxNumber){
//       maxNumber=i
//     }
//   };
//   return maxNumber;
// };

// const arr = [2,3,17,9,2,11];
// const result = findMaxNumber(arr);
// console.log(result)

// 4. find the reverse of stringc

// function reverseString(string){
//   let reverseOrder = ''
//   for(let i=string.length-1; i>=0; i--){
//     reverseOrder += string[i]
//   }
//   return reverseOrder
// }

// let string = "MUKESH";
// const result = reverseString(string)
// console.log(result)