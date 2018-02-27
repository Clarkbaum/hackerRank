class Polygon {
  constructor(sides){
    sides.forEach((side, index) => {
      this[index] = side;
    })
  }
  
  perimeter() {
    let output = 0;
    for (var side in this) {
      output += this[side];
    }
    
    return output;
  }


/*

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
*/
