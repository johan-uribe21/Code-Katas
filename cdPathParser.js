// cd /a/b/c
// cd /a/./b => cd /a/b
// cd /a/../b => cd /b


// if string include /./ remove the ./ from the string
// if string includes x/../ remove x/../

// passed(/a/../b).expect(/b)
// passed(/a/./b).expect(/a/b)

const path1 = '/a/../b';
const path2 = '/a/./b';
const path3 = '/a/b';
const path4 = '/'; //should return itself
const path5 = '/a/../../.././b' /// corner case, can not go past the root directory
///  path: /a//b/c
// map

function pathParser(path){
  const pathArray = path.split('/');
  let parsedPath = '/';
  const parsedPathArray = pathArray.filter(dir => {
    return dir !== '.' && dir !=='';
  })
  
  for(let i=0; i<=parsedPathArray.length-1; i++){
    if(parsedPathArray[i] ==='..' && parsedPath.length > 2){
      parsedPath = parsedPath.substring(0, parsedPath.length - 2);
    }
    if(parsedPathArray[i]!=='..'){
      parsedPath += parsedPathArray[i]
      parsedPath += '/';
    }
  };
  
  return parsedPath
};

console.log(pathParser(path5));