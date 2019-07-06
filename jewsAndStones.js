// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:
// Input: J = "z", S = "ZZ"
// Output: 0

//How many of my stones are also jewels?

//J distinct letters. Case sensitive. 

const numJewelsInStones = function(J, S) {
  const jewelMap = new Map();
  let total = 0
  for(let i = 0; i<J.length; i++) jewelMap.set(J[i]);
  for(let i = 0; i<S.length; i++){
    if(jewelMap.has(S[i])) total ++;
  };
  return total;
};

console.log(numJewelsInStones('ab', 'bb'));