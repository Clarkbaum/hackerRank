
//still not passing all tests atm, almost
var Stack = function() {
  this.data = [];
  this.max = [0];
}

Stack.prototype.push = function(val) {
  val = Number(val);
  this.data.push(val);
  if(val > this.max[0]){
    this.max.unshift(val)
  }
}

Stack.prototype.pop = function() {
  var removing = this.data.pop();
  if(removing === this.max[0]) {
    this.max.shift();
  }
}

Stack.prototype.print = function() {
  return this.max[0];
}

function processData(input) {
  var stack = new Stack();
  var inputArr = input.split('\n')
  
  inputArr.forEach(function(line) {
    //console.log("line0", line);
    if(line[0] === '1'){
      stack.push(line.substring(2));
    } else if(line[0] === '2') {
      stack.pop()
    } else if(line[0] === '3') {
      console.log(stack.print())
    }
  }) 
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
