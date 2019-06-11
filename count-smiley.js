// Description:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :] 

// Example cases:

//countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
//countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
//countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

const array1 = [';]', ':[', ';*', ':$', ';-D'];

function hasValidEyes(face){
  const isValid = face[0]===':'||face[0]===';'? true : false
  return isValid
};

function hasValidNose(face){
  if(face.length===3) {
    return face[1]==='-'||face[1]==='~'? true : false 
  }
  return true
};

function hasValidMouth(face){
  console.log(face)
  let isValid = face[face.length-1]===')'||face[face.length-1]==='D'? true : false
  console.log(isValid)
  return isValid
};

function countSmileys(arr){
  let numOfSmileys = 0
  // map over arry and return 1 for elements with valid smiley faces
  const validSmileys = arr.map(face => {
    if(face.length>3) return 0
    if( hasValidEyes(face) && hasValidNose(face) && hasValidMouth(face) ){
      numOfSmileys ++
      return 1;
    }
    return 0;
  })
  return numOfSmileys
};

console.log(countSmileys(array1))