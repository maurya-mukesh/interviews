const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      if (data) {
        resolve({ data }); // Promise is fulfilled with the data
      } else {
        reject("Data not found"); // Promise is rejected with an error message
      }
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

/**
 * @description Quick sort algo
 * @param {*} arr
 * @returns sorrted array
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else rightArr.push(arr[i]);
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const originalArr = [2, 1, 6, 99, 3, 4, 2, 6, 0];
const result = quickSort(originalArr);
console.log(result);
