//Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
//and returns the same string with all even indexed characters in each word 
//upper cased, and all odd indexed characters in each word lower cased. The 
//indexing just explained is zero based, so the zero-ith index is even, therefore 
//that character should be upper cased.

//The passed in string will only consist of alphabetical characters and spaces(' '). 
//Spaces will only be present if there are multiple words. Words will be separated by a 
//single space(' ').


function toWeirdCase(string1){
  const wordsArray = string1.split(' ')
  return wordsArray.map( (word) => {
    return word.split('').map( (char, idx) => {
      return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    }).join('')
  }).join(' ')
}

console.log(toWeirdCase('Weird string case'));
console.log(toWeirdCase('ThIs Is A TeSt'));