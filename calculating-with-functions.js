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
  const a = 0;
  if(operator===null){return a} 
  return operator(a)
}

function one(operator=null){
  const a = 1;
  if(operator===null){return a} 
  return operator(a)
}

function two(operator=null){
  const a = 2;
  if(operator===null){return a} 
  return operator(a)
}

function three(operator=null){
  const a = 3;
  if(operator===null){return a} 
  return operator(a)
}

function four(operator=null){
  const a = 4;
  if(operator===null){return a} 
  return operator(a)
}

function five(operator=null){
  const a = 5;
  if(operator===null){return a} 
  return operator(a)
}

function six(operator=null){
  const a = 6;
  if(operator===null){return a} 
  return operator(a)
};

function seven(operator=null){
  const a = 7;
  if(operator===null){return a} 
  return operator(a)
};

function eight(operator=null){
  const a = 8;
  if(operator===null){return a} ;
  return operator(a)
};

function nine(operator=null){
  const a = 9;
  if(operator===null){return a};
  return operator(a)
};

const x = plus(five())
const y = seven(plus(five()));
console.log(x);
console.log(y);


seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

