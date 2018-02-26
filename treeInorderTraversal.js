/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    Sample Input

     1
      \
       2
        \
         5
        /  \
       3    6
        \
         4  
Sample Output

1 2 3 4 5 6 
*/

function inOrder(root) {
  //left
  //root
  //right
  
  var output = '';
  function recur(root) {
    if(root === null) {
      return null;
    }
    
    recur(root.left);
    output += root.data + ' ';
    recur(root.right);
  }
  
  recur(root);
  console.log(output)
   
}