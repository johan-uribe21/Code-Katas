// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
const alphabetMap = new Map();
const alphabet="abcdefghijklmnopqrstuvwxyz".split('')
alphabet.forEach((letter,index)=>alphabetMap.set(letter.charCodeAt(0),{index,letter}))

function alphabetPosition(text) {
  const textArray = text.split('')
  console.log(textArray)
  let result = [];
  for(let letter of textArray){
    if( alphabetMap.has(letter.toLowerCase().charCodeAt(0))) {
      result.push(alphabetMap.get(letter.toLowerCase().charCodeAt(0)).index+1);
    }; 
  }
  return result.join(' ')
}

console.log(alphabetPosition('Hello there').length)
//console.log(alphabetPosition('My name is Johan'))