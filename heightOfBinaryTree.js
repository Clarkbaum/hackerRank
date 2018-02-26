/*
Node is defined as
var Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

sample input 

root of tree

same outout

one int telling height
*/

// This is a "method-only" submission.
// You only need to complete this method.

function treeHeight(root) {
  var height = 0;
  var heightArr = [];
  
  function recur(root, height) {
    if(root === null) {
      height--;
      return null;
      
    }
    heightArr.push(height)
    height++;
    
    recur(root.left, height)
    recur(root.right, height)
  }
  
  recur(root, height);
  
  console.log(Math.max(...heightArr))
}