// You have an array of numbers. Your task is to sort ascending odd numbers and descending even numbers.

// Note that zero is even number. If you have an empty array, you need to return it.

// Example

function getEvens(array){
  return array.filter(elem => elem%2 === 0);
};

function getOdds(array){
  return array.filter(elem => elem%2 === 1);
};

function sortArray(array) {
  // split into even and odd
  const evens = getEvens(array);
  const odds = getOdds(array);

  console.log(evens)
  console.log(odds)
  // sort each array using quick sort
  const sortedEvens = evens.sort((a,b)=>a-b).reverse();
  const sortedOdds = odds.sort((a,b)=>a-b);

  return sortedOdds.concat(sortedEvens);
}


let sorted = sortArray([5, 3, 2, 8, 1, 4]) // == [1, 3, 5, 8, 5, 2]
console.log(sorted)