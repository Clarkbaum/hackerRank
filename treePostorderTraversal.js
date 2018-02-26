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

4 3 6 5 2 1 
*/

function postOrder(root) {
  //left
  //right
  //root
  
  var output = '';
  function recur(root) {
    if(root === null) {
      return null;
    }
    
    recur(root.left);
    recur(root.right);
    output += root.data + ' ';
  }
  
  recur(root);
  
  console.log(output)
}