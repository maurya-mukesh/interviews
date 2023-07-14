// Ques:1
// let arr = [4,5,3,2,1,5,6,7,8,9,1,2,3,4];

//   let newArray=[];
//   for(let i=0; i< arr.length; i++){
//     if(!newArray.includes(arr[i])){
//       newArray.push(arr[i])
//     }
//   };
//   console.log("newArray==>", newArray)

// Ques:2
// let sumOfArray = arr.reduce((prev, currentValue)=> prev + currentValue, 0)
// console.log(sumOfArray);
 
// Ques:3
// let arr1 = [4, 5, 3, 2, 1, 5, 6, 7, 8, 9, 1, 2, 3, 4];
// let uniqueArr = [];

// let c=1;

// function test(c) {
//  c=2;
// }

// test(c);

// console.log(c);

// let obj = {"a":1}

// function objTest(obj) {
//  obj.a=2;
// }

// objTest(obj);

// console.log(obj.a);

// let obj1 = {"a":1}

// function objTest1(...obj1) {
//  obj1.a=2;
// }

// objTest1(obj1);

// console.log(obj1.a);

// Ques:4
// function Employee(name) {
//    this.name = name;
//    this.getName = () => this.name;
//   }
  
//   var emp = Object.create(new Employee('John'));
//   delete emp;
  
//   console.log(emp.getName());

// Ques:5

  // function myClassStr(name) {
  //    this.name = name;
    
  //    return this.name;
  //   }
    
  //   function myClassObj(name) {
  //    this.name = name;
  //    return () => name;
  //   }
    
  //   var child1 = new myClassStr('Nodejs');
  //   var child2 = new myClassObj('JS');
    
  //   console.log(typeof child1, typeof child2);

// Ques:6
    // function myClassStr(name) {
    //    this.name = name;
      
    //    return this.name;
    //   }
      
    //   function myClassObj(name) {
    //    this.name = name;
    //    return () => name;
    //   }
      
    //   var child1 = new myClassStr('Nodejs');
    //   var child2 = new myClassObj('JS');
      
    //   console.log(typeof child1, typeof child2);

// Ques:7
      // function Employee(name, dept) {
      //    this.name = name;
      //    this.dept = dept;
      //   }
        
      //   var emp = Object.create(Employee);
      //   console.log(emp.length)



// Ques:8
// let count = 0;
// // Example using setTimeout
// function timerWithTimeout() {
//   setTimeout(() => {
//     count++;
//     console.log(`Count with setTimeout: ${count}`);
//   }, 5000);
// }

// timerWithTimeout(); 
// let count=0;

// let interval=()=> setInterval(() => {
//   count++;
//   console.log(`Count with setInterval: ${count}`);
// }, 1000);
// Example using setInterval
// function timerWithInterval() {
// 

// timerWithInterval();


// let arr = ['cp', 'ax', 'az', 'xa', 'aa'];
// let accArr = arr.sort()
// console.log("acceding arr=>", accArr)

// // let decArr = arr.sort((a,b)=>b.localeCompare(a));
// let decArr = arr.sort((a,b)=>b.localeCompare(a)); 
// console.log('Descending order=>', decArr);
// let tryArr = arr.sort((a,b)=>a.localeCompare(b)); 
// console.log('tryArr:', tryArr);

// let arr = [2,3,0,4,3,2,4,3,1,0, 333,33,3]
// let countZero = arr.reduce((accumulator, currentValue)=>{
//   if(currentValue === 5){
//     return accumulator+1
//   }
//   return accumulator
// },0)
// console.log(countZero)

// let a="5"
// let b="7"

// [a,b]=[b,a]
// // a=a+b; // a=12
// // b=a-b // b= 12-7 = 5
// // a=a-b // a = 12-5 = 7
// console.log(a,b)

// let a = 5;
// let b = 7;

// [a, b] = [b, a];

// console.log(a, b); // Output: "b"
// console.log(b); // Output: "a"