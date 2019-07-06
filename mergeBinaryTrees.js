// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

// Example 1:

// Input: 
// 	Tree 1                     Tree 2                  
//           1                         2                             
//          / \                       / \                            
//         3   2                     1   3                        
//        /                           \   \                      
//       5                             4   7                  
// Output: 
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7


// 1: create a third array, add each elemenent of both arrays line by line

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var mergeTrees = function(t1, t2) {
  if(!t1 && !t2) return null

  let t1Value = !t1 ? 0: t1.val;  
  let t2Value = !t2 ? 0: t2.val;  

  const t3 = new TreeNode( t1Value + t2Value ) ;
  // recursive case
  // if t1 is null, pass t1, otherwise pass t1.left
  // same for t2. 
  t3.left = mergeTrees(t1 && t1.left, t2 && t2.left);
  t3.right = mergeTrees(t1 && t1.right, t2 && t2.right);
  
  return t3
};

//  1            1
// 2 3          2 3
 //t1.val == 2
 // not in base case
 // left branch = mergeTrees(2,2)) 
    //in base case: return 2 + 2
 // right branch = mergeTrees(3,3) 
    // in base case: returns 3 + 3
 // t3.left = 4
 // t3.right = 6
 // return t3 {t3.val = }
