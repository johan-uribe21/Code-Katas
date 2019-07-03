//What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

function isAnagram(word, elem){
  const wordLetters = word.split('');
  const elemLetters = elem.split('');
  let index = 0;
  for (let i = 0; i < wordLetters.length; i++) {
    index = elemLetters.findIndex(e => e === wordLetters[i]);
    if(index >= 0) elemLetters.splice(index,1)
  }
  if(elem.length === word.length && elemLetters.length=== 0) return true
  return false
};

function anagrams(word, words) {
  const result = [];
  for (let elem of words){
    if(isAnagram(word, elem)) result.push(elem)
  }
  return result;
}

//anagrams('pie', 'pie')
console.log(anagrams('pie', ['pie']))
