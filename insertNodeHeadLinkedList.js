
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

//////////not from hacker rank just more practice//////////////

var List = function(data) {
  this.data = data;
  this.next = null;
}

List.prototype.add = function(data) {
  var current = this;
  while(current.next !== null) {
    current = current.next;
  }
  current.next = new List(data);;
}

List.prototype.remove = function() {
  var current = this;
  while(current.next.next !== null) {
    current = current.next
  }
  current.next = null;
}

List.prototype.print = function() {
  var output = [];
  var current = this;
  output.push(current.data)
  while(current.next !== null) {
    current = current.next;
    output.push(current.data)
  }
  console.log(output)
}

List.prototype.find = function(val) {
  var current = this;
  var output = false;
  if(val === current.data) output = true;
  while(current.next !== null) {
    
    current = current.next;
    console.log("current.data", current.data)
    if(val === current.data)  output = true
  }
  
  console.log(output)
}

class List2 {
  constructor(data){
    this.data = data;
    this.next = null;
  }
  
  add(data){
    var current = this;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = new List(data);;
  }
  
  remove(){
    var current = this;
    while(current.next.next !== null) {
      current = current.next
    }
    current.next = null;
  }
  
  print(){
    var output = [];
    var current = this;
    output.push(current.data)
    while(current.next !== null) {
      current = current.next;
      output.push(current.data)
    }
    console.log(output)
  }
  
  find(val) {
    var current = this;
    var output = false;
    if(val === current.data) output = true;
    while(current.next !== null) {
      
      current = current.next;
      console.log("current.data", current.data)
      if(val === current.data)  output = true
    }
    
    console.log(output)
  }
}

var list2 = new List2('1')
list2.add('2');
list2.add('3');
list2.add('4');
list2.find('1');
list2.print()
list2.remove();
list2.find('4');
list2.print()

var list = new List('1');
list.add('2');
list.add('3');
list.add('4');
list.find('1');
list.print()
list.remove();
list.find('4');
list.print()
