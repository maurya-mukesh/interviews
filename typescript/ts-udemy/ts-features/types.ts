//primitive data type
let apple: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMatch: null = null;
let nothing: undefined = undefined;

// Array data type
let colors: string[] = ["red", "green", "yellow"];
let even: number[] = [2, 4, 6, 8];
let truthy: boolean[] = [false, true, false];

// date
let now: Date = new Date();

// class
class Car {}
let BMW: Car = new Car();

// object literal
let point: { x: number; y: number } = {
	x: 23,
	y: 45,
};

// Functions
const logNumber:(i:number)=> void = (num: number) => {
	console.log(num);
};


// perfect number
function perfectNumber(num:number):boolean{
	let arr:number[] = [];
	for(let i=1; i<Math.ceil(num/2); i++){
		if(num%i===0 ){
			arr.push(i)
		}
	}
	console.log(arr)
	let sumValue = arr.reduce((acc,nextVal)=>acc+nextVal, 0)
	return (sumValue === num);
};
console.log(perfectNumber(28))