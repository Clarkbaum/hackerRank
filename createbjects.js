/*
 * Complete the Rectangle function

 Sample Input 0

4
5

Sample Output 0

4
5
18
20
 */
function Rectangle(a, b) {
  
  var rec = {}
  rec.length = a;
  rec.width = b;
  rec.perimeter = a + a + b + b;
  rec.area = a * b;
  
  return rec;
}

/*
function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}
*/