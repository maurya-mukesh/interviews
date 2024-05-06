// (()=>{
//   let x, y
//   try {
//     throw new Error();
//   } catch (x) {
//     (x=1),(y=2)
//     console.log(x)
//   }
//   console.log(x)
//   console.log(y)
// })();



// let appliedJob = 1+1+1+1+1+3+1+1+1+1+2+4+2+2+7
// console.log(appliedJob)


// function printNumber(){
//   let time = 1000;

//   for(var i=0; i<10; i++){
//     // time=time+1000
//     setTimeout(()=>{
//       console.log(i);
//     }, time*i)
//   };
// }

// printNumber();

// let output  = [1, 2, 3].map(num => {
//   if (typeof num === 'number') return;
//   return num * 2;
// });

// // output [1,2,3]
// console.log(output)

// let data = [
//   {
//     name: 'abc',
//     age: 23,
//   },
//   { 
//     name: 'abc', 
//     age: 23 
//   },
//   {
//     name: 'abc',
//     age: 23,
//   },
// ];
// let value = [1,2,3]

// let sumOfAges = data.reduce((prev, curr) => prev + curr.age, 0);
// console.log(sumOfAges);
