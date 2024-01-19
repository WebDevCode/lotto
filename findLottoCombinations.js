function generateCombinationsForArrays(arrays, k) {
  const result = [];

  function generateCombinations(arr, k, start = 0, currentCombination = []) {
    if (currentCombination.length === k) {
      result.push([...currentCombination]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      currentCombination.push(arr[i]);
      generateCombinations(arr, k, i + 1, currentCombination);
      currentCombination.pop();
    }
  }

  arrays.forEach((arr) => {
    generateCombinations(arr, k);
  });

  return result;
}

//   // Example usage with an array of arrays containing 6 numbers each
//   const inputArrays = [
//     [1, 2, 3, 4, 5, 6],
//     [7, 8, 9, 10, 11, 12],
//     // Add more arrays as needed
//   ];

//   const resultArray = generateCombinationsForArrays(inputArrays, 4);
//  console.log(resultArray);

function sortArrayofArrays(arr) {
  return arr.map((a) => a.sort());
}

function countOccurrences(arrays) {
  const occurrencesMap = new Map();

  // Count occurrences of each array
  arrays.forEach((arr) => {
    const key = JSON.stringify(arr);
    occurrencesMap.set(key, (occurrencesMap.get(key) || 0) + 1);
  });

  // Create result array with original array and count
  const result = Array.from(occurrencesMap, ([key, count]) => {
    const originalArray = JSON.parse(key);
    return [originalArray, count];
  });

  return result;
}

//   // Example usage with an array of arrays containing 4 numbers each
//   const inputArrays = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [1, 2, 3, 4],
//     [9, 10, 11, 12],
//     [5, 6, 7, 8],
//   ];

//   const resultArray = countOccurrences(inputArrays);

//   console.log(resultArray);

export function run(arr, k) {
  let combinationArray = generateCombinationsForArrays(arr, k);
  let sortedArray = sortArrayofArrays(combinationArray);
  let occurenceArray = countOccurrences(sortedArray);
  return occurenceArray.sort((a, b) => b[1] - a[1]);
}

let lottoNumbersArray = [];
