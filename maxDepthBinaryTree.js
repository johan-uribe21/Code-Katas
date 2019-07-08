// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
  // base case
  if(!root) return 0;
  // recursive case
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// The trick to this problem had two parts: identify the base case, and then assume that someone had written 
// a magic solution to the problem telling you the depth of the first left and right branches. Assuming you know 
// the depth of those two branches, all you have to do is take the max, and add 1. Perfect example of the top-down
// magic solution paradigm. 