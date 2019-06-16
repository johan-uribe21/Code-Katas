// Complete the function scramble(str1, str2) that returns true if a portion 
// of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will 
//be included.
// Performance needs to be considered


function hashMapSearch(str1, str2){
  console.time("dbsave")
  const hashMap = {};
  // creates the hash-map with key-value pairs, 
  // key is the letter
  // value is the number of occurences
  for (let i = 0; i<str1.length; i++){
    const char = str1[i];
    hashMap[char]? hashMap[char]++ : hashMap[char] = 1;
  }
  //check hash map contains each letter of str2
  // if contain, subtract 1 from value
  // if loop finishes, return true
  for(let i = 0; i<str2.length; i ++){
    const char = str2[i];
    // if value is 0, it hashMap[char] returns falsy
    if(hashMap[char]) hashMap[char]--;
    else {
      console.timeEnd("dbsave")
      return false;
    }
  }
  console.timeEnd("dbsave")
  return true;
};

console.log(hashMapSearch('abc', 'ab'))
console.log(hashMapSearch('basabcdefkjiklnopfquertondfsafdsa', 'hamburgerandfries'))
console.log(hashMapSearch('katas', 'steak'))

