// F - Wrap this command around <span style="color: pink"> and </span> tags so that it is highlighted pink in our editor
// L - Wrap this command around <span style="color: red"> and </span> tags so that it is highlighted red in our editor
// R - Wrap this command around <span style="color: green"> and </span> tags so that it is highlighted green in our editor
// Digits from 0 through 9 - Wrap these around <span style="color: orange"> and </span> tags so that they are highlighted orange in our editor
// Round Brackets - Do not apply any syntax highlighting to these characters

//five characters: F, L, R, digits, ()

function separateByType(str){
  const result = [];
  let char = str.split('')
  for(let i=0; i<char.length; i++){
    const duplicates = [];
    //push the first
    duplicates.push(char[i]);

    // check for integers in a row
    if (Number.isInteger(parseInt(char[i])) && Number.isInteger(parseInt(char[i+1]))){ 
      duplicates.push(char[i+1]);
      for(let j = i+1; j<char.length-1; j++){
        if(Number.isInteger(parseInt(char[j])) && Number.isInteger(parseInt(char[j+1]))){
          duplicates.push(char[j+1]);
          i++;
        }
        else break;
      };
      i++
    }
    
    if (!Number.isInteger(parseInt(char[i])) && char[i]===char[i+1]){
      //if match, push the second
      duplicates.push(char[i+1]);
      for(let j = i+1; j<char.length-1; j++){
        //iterate through rest of array until no match
        if(char[j]===char[j+1]){
          // push the third
          duplicates.push(char[j+1]);
          // advance the main loop past the third + duplicate characters
          i++;
        }
        else break;
      };
      //advance the loop past the second duplicate
      i++
    }
    result.push(duplicates.join(''))
  }
  return result;
};

function highlight(str){
  let color = 'red'
  let tagOpen = '';
  const tagClose = '</span>'
  let output = '';
  const arrayOfChars = separateByType(str);
  console.log(arrayOfChars)
  for(elem of arrayOfChars){
    if(elem[0]==='F') {
      color='pink';
      tagOpen = `<span style="color: ${color}">`;
      output+=tagOpen+elem+tagClose  ;
    }
    if(elem[0]==='L') {
      color='red';
      tagOpen = `<span style="color: ${color}">`;
      output+=tagOpen+elem+tagClose ;
    }
    if(elem[0]==='R') {
      color='green';
      tagOpen = `<span style="color: ${color}">`;
      output+=tagOpen+elem+tagClose ;
    }
    if(Number.isInteger(parseInt(elem[0]))) {
      color='orange';
      tagOpen = `<span style="color: ${color}">`;
      output+=tagOpen+elem+tagClose ;
    }
    if(elem[0]==='(' || elem[0]===')') {
      output+=elem;
    }
  }
  return output
};

console.log(highlight("FF((R"));

// This is the better solution. Readable and faster.
function highlight2(code) {
  return code.replace(/(F+)/g,'<span style="color: pink">$1</span>').
    replace(/(L+)/g,'<span style="color: red">$1</span>').
    replace(/(R+)/g,'<span style="color: green">$1</span>').
    replace(/(\d+)/g,'<span style="color: orange">$1</span>');
}

console.log(highlight2("FF((R"));
