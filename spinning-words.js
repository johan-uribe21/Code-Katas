//Write a function that takes in a string of one or more words, 
//and returns the same string, but with all five or more 
//letter words reversed (Just like the name of this Kata). 
//Strings passed in will consist of only letters and spaces. 
//Spaces will be included only when more than one word is present.


//Examples:


const string1 = 'fellow'

const spinWord = (wordString) => {
  const letterArray = wordString.split('');
  const n = letterArray.length
  let reverseString = '';
  for(let i=n-1; i>=0; i--){
    reverseString+=letterArray[i]
  }
  return reverseString
}

const spinWords = (string) => {
  const arrayOfWords = string.split(' ');
  const reversedArray = arrayOfWords.map(word => {
    if(word.length>=5) return spinWord(word);
    return word
  }) 
  return reversedArray.join(' ');
};

spinWords(string1);

spinWords( "Hey fellow warriors" ) // returns "Hey wollef sroirraw" 
spinWords( "This is a test") // returns "This is a test" 
spinWords( "This is another test" ) // returns "This is rehtona test"