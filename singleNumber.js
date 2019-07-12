// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

const array = [4, 1, 2, 1, 2];

function singleNumber(array){
  const hashMap = new Map();
  for(let i = 0; i < array.length; i++){
    if(hashMap.has(array[i])) hashMap.delete(array[i])
    else hashMap.set(array[i], 1);
  }
  return hashMap.keys().next().value
}

console.log(singleNumber(array))