// const length = 4;
// const numbers = [];
// for (let i = 0; i < length; i++){
//   setTimeout(()=>{

//     numbers.push(i + 1);
//   },0)
// }

// console.log(numbers); // =>


// let i;
// for (let i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }

// console.log(myVar);   // => ???
// myConst; // => ???

// var myVar = 'value';
// const myConst = 3.14;


let str = "NavaN"
let str2 = "NNaav"
let x = str.toLowerCase()
let y = str2.toLowerCase()
if(x.split('').sort().join('') === y.split('').sort().join('')){
  console.log(true)
}else(
  console.log(false)
)

