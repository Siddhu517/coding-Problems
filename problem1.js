/*
Question 1:
Write a program that takes as input an array of positive and negative numbers (0 excluded). The objective is to
return those items from the array whose sum is 0. If no such items exist return “No Elements found”
Example: For an input array [-4, 1, 3, -2, -1],
one of the possible results would be 3, -2, -1 since their sum is 0.
Note: If there are more than 1 combination of such items, you can return any 1 of them.
 */

/* 
Time complexity is O(n^3)  => three nested loop n^3
Space complexity is O(n)    => size of store array is n
 */

function findCombinationOfSumZero(arr) {
  let result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          arr[i] + arr[j] + arr[k] === 0 &&
          arr[i] !== 0 &&
          arr[j] !== 0 &&
          arr[k] !== 0
        ) {
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  if (result.length > 0) {
    return result;
  } else {
    return "No combination found";
  }
}

/* test cases */
/* [] */
console.log(findCombinationOfSumZero([])); // No combination found
/* [0,0,0,0,0,0] */
console.log(findCombinationOfSumZero([0, 0, 0, 0, 0, 0])); //No combination found
/* [1,1,1,1,1,1] */
console.log(findCombinationOfSumZero([1, 1, 1, 1, 1, 1])); // No combination found
/* [1,0,1,0,1,0] */
console.log(findCombinationOfSumZero([1, 0, 1, 0, 1, 0])); // No combination found
/* [-1,0,-1,0,-1,0] */
console.log(findCombinationOfSumZero([-1, 0, -1, 0, -1, 0])); //No combination found
/* [-1,4,-2,5,-1,3] */
console.log(findCombinationOfSumZero([-1, 4, -2, 5, -1, 3])); // [ [ -1, -2, 3 ], [ -2, -1, 3 ] ]

console.log(findCombinationOfSumZero([-4, 1, 3, -2, -1])); // [ [ -4, 1, 3 ], [ 3, -2, -1 ] ]

console.log(findCombinationOfSumZero([-4, 1, 4, 5, -7])); // No combination found
