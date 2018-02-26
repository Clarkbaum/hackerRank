
/*
Insert Node at the beginning of a linked list
head pointer input could be NULL as well for empty list
Node is defined as
var Node = function(data) {
  this.data = data;
  this.next = null;
}

Sample Input

NULL , data = 1 
1 --> NULL , data = 2

Sample Output

1 --> NULL
2 --> 1 --> NULL
*/

function insert(head, data) {
  var node = new Node();
  node.data = data;
  if(head === null) {
    return node;
  } else {
    node.next = head;
    
    return node;
  }
}