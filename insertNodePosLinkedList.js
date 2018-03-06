/*
  Insert Node at a given position in a linked list 
  head can be NULL 
  First element in the linked list is at position 0
  Node is defined as
  var Node = function(data) {
    this.data = data;
    this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data, position) {
  var pos = 0;
  var node = new Node();
  node.data = data;
  if(head === null || head === undefined ) {
    return node;
  } else if (position === 0){
    node.next = head;
    
    return node;
  } else if (position === 1) {
    node.next = head.next;
    head.next = node;
    
    return head;
  } else {
    var current = head;
    
    while(current.next !== null) {
      current = current.next;
      pos++;
      if(pos === position - 1 ) {
        node.next = current.next;
        current.next = node;
      }
    }
    return head;
  }
}