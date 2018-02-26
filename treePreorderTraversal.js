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

1 2 5 3 4 6 
*/

function preOrder(root) {
  //root
  //left
  //right
  var output = '';

  function recur(root) {
    if(root === null) {
      return null;
    }
    output += root.data + ' ';
    recur(root.left);
    recur(root.right);
  }
  recur(root);
  console.log(output);
   
}