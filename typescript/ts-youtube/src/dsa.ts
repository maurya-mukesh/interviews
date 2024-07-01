// Q.1: Find the Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.





// Q.2: Find the Duplicate Number: Given an array containing n + 1 integers where each integer is between 1 and n (inclusive), find the duplicate number.

// Q.3: Rotate Array: Rotate an array of n elements to the right by k steps.

// Q.4: Find Peak Element: A peak element in an array is an element that is greater than its neighbors. Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

// Q.5: Product of Array Except Self: Given an array nums of n integers, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Q.6: Maximum Subarray: Find the contiguous subarray within an array (containing at least one number) that has the largest sum.

// Q.7: Merge Intervals: Given a collection of intervals, merge all overlapping intervals.

// Q.8: Pascal's Triangle: Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// Q.9: Move Zeroes: Given an array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Q.10: Valid Mountain Array: Given an array A of integers, return true if and only if it is a valid mountain array.

// Q. 11: Change a number to equivalent roman number?
function changeNumToRoman(num:number):string{
  let romanNum={
    100:"C",
    90:"XC",
    50:"L",
    40:"XL",
    10:"X",
    9:"IX",
    5:"V",
    4:"IV",
    1:"I"
    };
    let result:string = ""
    for(let i:number; i<Object.keys(romanNum).length; i++){
      while(num>romanNum[i]){
        result+=romanNum[i];
        num-= romanNum[i]
      }
    }
    return result;
} 

console.log(changeNumToRoman(22))
