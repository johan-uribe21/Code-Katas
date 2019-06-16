// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
// This time we want to write calculations using functions 
// and get the results. Let's have a look at some examples:

function times(b){
  return function(a){return a*b}
};

function minus(b){
  return function(a){return a-b};
};

function dividedBy(b){
  return function(a){
    return Math.floor(a / b);
  }
};

function plus(b){
  return function(a){
    return a+b;
  }
};

function zero(operator=null){
  if(operator===null){return 0} 
  return operator(0)
}

function one(operator=null){
  if(operator===null){return 1} 
  return operator(1)
}

function two(operator=null){
  if(operator===null){return 2} 
  return operator(2)
}

function three(operator=null){
  if(operator===null){return 3} 
  return operator(3)
}

function four(operator=null){
  if(operator===null){return 4} 
  return operator(4)
}

function five(operator=null){
  if(operator===null){return 5} 
  return operator(5)
}

function six(operator=null){
  if(operator===null){return 6} 
  return operator(6)
};

function seven(operator=null){
  if(operator===null){return 7} 
  return operator(7)
};

function eight(operator=null){
  if(operator===null){return 8} ;
  return operator(8)
};

function nine(operator=null){
  if(operator===null){return 9};
  return operator(9)
};

const x = plus(five())
const y = seven(plus(five()));
console.log(x);
console.log(y);


seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

