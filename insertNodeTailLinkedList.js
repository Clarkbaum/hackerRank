
/*
Node is defined as
var Node = function(data) {
  this.data = data;
  this.next = null;
}

Sample Input

NULL, data =  2
 2--> NULL, data = 3

Sample Output

2 -->NULL
2 --> 3 --> NULL
*/

function insert(head, data) {
  //console.log("head", head)
  //console.log("data", data)
  if(head === null) {
    //put data as head and point to null
    var node = new Node();
    node.data = data;
    
    return node;
  } else {
    //find end of linkedlist and add data
    var current = head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = new Node();
    current.next.data = data;
    
    return head;
  }
}

