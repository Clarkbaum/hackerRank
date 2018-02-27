/*
Sample Input 0

"1234"

Sample Output 0

4321

Sample Input 1

Number(1234)

Sample Output 1

s.split is not a function
1234
*/

function reverseString(s) {
  try {
    let sArr = s.split('');
    sArr.reverse();
    console.log(sArr.join(''));
  } 
  catch(err) {
    console.log(err.message)
    console.log(s)
  }
  
}