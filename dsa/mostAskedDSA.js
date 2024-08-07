/**
 * 
@Question1 Given an nested Object and flat object as given output result.
input: user = {
  name:"John",
  address:{
    local:{
      street:"123 ABC",
      landmark:"Near SBI bank",
      fax:{
        home:12345,
        work:542321
      }
    }
  }
  phone:[123, 321]
}

output: user = {
  user_name : "John",
  user_address_local_street : "123 ABC",
  user_address_local_landmark : "Near SBI bank",
  user_address_local_fax_home : 12345,
  user_address_local_fax_work : 542321,
  user_phone : [123,321]
}
*/

// function flattenObj(obj, parentKey) {
//   let result = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//       result = {
//         ...result,
//         ...flattenObj(obj[key], `${parentKey}${key}_`),
//       };
//     } else {
//       result[`${parentKey}${key}`] = obj[key];
//     }
//   }

//   return result;
// }

// let user = {
//   name: "John",
//   address: {
//     local: {
//       street: "123 ABC",
//       landmark: "Near SBI bank",
//       fax: {
//         home: 12345,
//         work: 542321,
//       },
//     },
//   },
//   phone: [123, 321],
// };
// let res = flattenObj(user, "");
// console.log(res);

/**
 * @Question2 Make a polyfill of flat array;
 */
// let arr = [2, 4, [3, 5, [3, 5, 7, 11]]];
// let res = arr.flat(2);
// console.log(res);

// Array.prototype.myFlat = function (depth) {
//   let res = [];
//   if (depth < 1) return this;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(this[i])) {
//       res = [...res, ...this[i].myFlat(depth - 1)];
//     } else {
//       res.push(this[i]);
//     }
//   }
//   return res;
// };

// let result = arr.myFlat(1);
// console.log(result);

/**
 * @Question3 longest palindromic subsequence string.
 * @input : 'xyzyxaabbcbbammnonmm';
 */

// function longestPalindromicSubsequence(s) {
//   let n = s.length;
//   let dp = Array.from(Array(n), () => Array(n).fill(0));
//   let subseq = Array.from(Array(n), () => Array(n).fill(""));

//   // All substrings of length 1 are palindromes of length 1
//   for (let i = 0; i < n; i++) {
//     dp[i][i] = 1;
//     subseq[i][i] = s[i];
//   }

//   // Build the table
//   for (let length = 2; length <= n; length++) {
//     for (let i = 0; i < n - length + 1; i++) {
//       let j = i + length - 1;
//       if (s[i] === s[j] && length === 2) {
//         dp[i][j] = 2;
//         subseq[i][j] = s[i] + s[j];
//       } else if (s[i] === s[j]) {
//         dp[i][j] = dp[i + 1][j - 1] + 2;
//         subseq[i][j] = s[i] + subseq[i + 1][j - 1] + s[j];
//       } else {
//         if (dp[i + 1][j] > dp[i][j - 1]) {
//           dp[i][j] = dp[i + 1][j];
//           subseq[i][j] = subseq[i + 1][j];
//         } else {
//           dp[i][j] = dp[i][j - 1];
//           subseq[i][j] = subseq[i][j - 1];
//         }
//       }
//     }
//   }

//   // The length of the longest palindromic subsequence is in dp[0][n-1]
//   // The longest palindromic subsequence itself is in subseq[0][n-1]
//   return {
//     length: dp[0][n - 1],
//     subsequence: subseq[0][n - 1],
//   };
// }

// Example usage:
// let s = "xyzyxaabcbbammnonmm";
// let result = longestPalindromicSubsequence(s);
// console.log("Length of longest palindromic subsequence:", result.length);
// console.log("Longest palindromic subsequence:", result.subsequence);

/**
 * @Question4 Find the 2nd largest number of given array;
 */

// function secondLargest(arr) {
//   if (arr.length < 2) {
//     return null;
//   }
//   let largest = -Infinity;
//   let secLargest = -Infinity;
//   console.log(largest);
//   console.log(typeof largest);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secLargest && arr[i] < largest) {
//       secLargest = arr[i];
//     }
//   }
//   return secLargest === -Infinity ? null : secLargest;
// }

// let arr = [99, -98, -17, -16, -Infinity];
// console.log(secondLargest(arr));

/**
 *
 * @Question5 Print all the possible subsets from a given slice of integers.
 * @returns  sub-integer as an array
 */
// function generateSubsets(nums) {
//   let result = [];
//   function backtrack(start, currentSubset) {
//     result.push([...currentSubset]);
//     for (let i = start; i < nums.length; i++) {
//       currentSubset.push(nums[i]);
//       backtrack(i + 1, currentSubset);
//       currentSubset.pop();
//     }
//   }
//   backtrack(0, []);
//   return result;
// }

// // Example usage:
// let nums = [1, 2, 3];
// let subsets = generateSubsets(nums);
// console.log(subsets);

//Ques 6 - Palindrome Number;
//Solution:

// function findPalindrome(num) {
// 	let numStr = num.toString();
// 	let j = numStr.length - 1;
// 	for (let i = 0; i < numStr.length; i++) {
// 		if (i === j) {
// 			// console.log(i, j);
// 			break;
// 		}
// 		if (numStr[i] !== numStr[j]) {
// 			return false;
// 		}
// 		j--;
// 	}
// 	return true;
// }

// let res = findPalindrome(121);
// console.log(res);

//Ques 7 - Fibonacci Number;
//Solution:

// function generateFibNum(num) {
// 	if (num < 0) return new Error("input number can't be negative");
// 	if (num === 0) return 0;
// 	if (num === 1) return 1;
// 	let a = 0,
// 		b = 1;
// 	for (let i = 2; i < num; i++) {
// 		let temp = a + b;
// 		a = b;
// 		b = temp;
// 	}
// 	return b;
// }

// console.log(generateFibNum(8)); //0,1,1,2,3,5,8,13

// function dpFibNum(num) {
// 	let dp = Array(num).fill(-1);
// 	dp[0] = 0;
// 	dp[1] = 1;
// 	// console.log(dp);
// 	for (let i = 2; i < num; i++) {
// 		dp[i] = dp[i - 1] + dp[i - 2];
// 	}
// 	return { series: dp, res: dp[num - 1] };
// }
// console.log(dpFibNum(8));

//Ques 8 : valid Anagram;
//Solution:

// function checkValidAnagram(source, target) {
// 	if (source.length !== target.length) return false;
// 	let sourceStr, targetStr;
// 	if (typeof source === "number") {
// 		sourceStr = arg.toString();
// 	}
// 	if (typeof target === "number") {
// 		targetStr = target.toString();
// 	}
// 	console.log(typeof source);
// 	if (typeof source === "string" && typeof target === "string") {
// 		// debugger;
// 		sourceStr = source;
// 		targetStr = target;
// 	}
// 	let sourceMap = {};
// 	let targetMap = {};
// 	console.log(sourceStr, targetStr);
// 	// debugger;
// 	for (let i = 0; i < sourceStr.length; i++) {
// 		let ele = sourceStr[i];
// 		sourceMap[ele] = (sourceMap[i] || 0) + 1;
// 	}
// 	for (let j = 0; j < targetStr.length; j++) {
// 		let ele = sourceStr[j];
// 		targetMap[ele] = (targetMap[j] || 0) + 1;
// 	}

// 	for (let key in targetMap) {
// 		if (sourceMap[key] !== targetMap[key]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }
// let source = "112123";
// let target = "121213";
// console.log(checkValidAnagram(source, target));

//Question : 9: Two Sum / [2,3,5,1,7,9] target = 12, // output [2,4];

// function findTwoSum(arr, target) {
// 	for (let k = 0; k < arr.length; k++) {
// 		for (let i = k + 1; i < arr.length; i++) {
// 			if (arr[k] + arr[i] === target) {
// 				return [k, i];
// 			}
// 		}
// 	}
// 	return "not matched";
// }

// console.log(findTwoSum([2, 3, 5, 1, 7, 9], 16));

// let arr = [1, 1, 2, 3, 2, 1, 3, 2, 4, 5, 9, 6];
// function findUnique(arr) {
//   let obj = {};
//   let unique = [];
//   for (let i = 0; i < arr.length; i++) {

//     obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//   }
//   Object.entries(obj).forEach((ele) => {
//     if (ele[1] === 1) {
//       unique.push(Number(ele[0]));
//     }
//   });

//   return { obj, unique };
// }

// console.log(findUnique(arr));

