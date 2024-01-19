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
  return arr.map((a) => a.sort((x, y) => x - y));
}
function removeDuplicates(arr) {
  return Array.from(new Set(arr.map(JSON.stringify)), JSON.parse);
}

function doesExist(arrtoCheck, combArray) {
  return combArray.every((v) => arrtoCheck.includes(v));
}

function timesInList(lottoArr) {
  return (target) => {
    const count = lottoArr.reduce(
      (acc, arr) => (doesExist(arr, target) ? acc + 1 : acc + 0),
      0
    );
    return count;
  };
}

function countOccurrences(combinations, lottoArray) {
  const occurrencesMap = new Map();
  const countIfExist = timesInList(lottoArray);
  // Count occurrences of each array
  combinations.forEach((arr) => {
    const key = JSON.stringify(arr);
    occurrencesMap.set(key, (occurrencesMap.get(key) || 0) + countIfExist(arr));
    //console.log(occurrencesMap);
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
  console.log(sortedArray);
  let cleanedArray = removeDuplicates(sortedArray);
  console.log(cleanedArray);
  let occurenceArray = countOccurrences(cleanedArray, arr);
  return occurenceArray.sort((a, b) => b[1] - a[1]);
}
