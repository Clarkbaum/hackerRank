/* Node is defined as
var Node = function(data) {
    this.data = data;
    this.next = null;
}

This example uses the following two linked lists:

NULL  
1->2->3->NULL

Sample Output

1
2
3

*/

function print(head) {
    //console.log("head", head)
    if( head === null) {
        return null;
    } else {
        var current = head;
        //console.log("current", current)
        console.log(current.data)
        while(current.next !== null) {
            
            current = current.next;
            console.log(current.data)
            
        }
    }
}