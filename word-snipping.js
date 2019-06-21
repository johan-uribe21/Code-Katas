//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

function spinWords(str){
  const words = str.split(' ')
  const result = [];
  console.log(words);
  for( let i =0; i<words.length; i++){
    let word = words[i].split('')
    if(word.length>4){
      word.reverse();
    }
    console.log(word)
    result.push(word.join(''))
  }
  console.log(result)
  return result.join(' ')
};

let snipped = spinWords( "Hey fellow warriors" ) //=> returns "Hey wollef sroirraw" 
console.log(snipped)
//spinWords( "This is a test") //=> returns "This is a test" 
//spinWords( "This is another test" ) //=> returns "This is rehtona test"