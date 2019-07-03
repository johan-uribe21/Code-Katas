// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

function partsSums(ls){
  const sumOfParts=[];
  let sum = 0;
  for (let i = 0; i < ls.length; i++) {
    sum += ls[ls.length -1 - i]
    sumOfParts.push(sum)
  }
  sumOfParts.reverse();
  sumOfParts.push(0)
  return sumOfParts;
};

ls = [1, 2, 3] 
ls.unshift(0)
console.log(ls)
console.log(partsSums(ls)) // -> [21, 20, 18, 15, 11, 6, 0]