
function findOutlier(intArray){
  let modulo = intArray.map(elem => Math.abs(elem)%2 )
  if(modulo[0]+modulo[1]+modulo[2]>1) {
    return intArray[ modulo.findIndex(e=> e===0)] 
  }
  else return intArray[ modulo.findIndex(e=> e===1)]
};


console.log(findOutlier([1,1,2])); // should return 2
console.log(findOutlier([2,2,1])); // should return 1
console.log(findOutlier([3,3,3,5,1,2])); //should return 2