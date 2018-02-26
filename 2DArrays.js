/*
input
There are 6 lines of input, where each line contains 6 space-separated integers describing 2D Array A; 
every value in A will be in the inclusive range of -9 to 9.

output
Print the largest (maximum) hourglass sum found in A.

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output

19
*/

function main() {
  var arr = [];
  for(arr_i = 0; arr_i < 6; arr_i++){
    arr[arr_i] = readLine().split(' ');
    arr[arr_i] = arr[arr_i].map(Number);
  }
  var output = [];
  for (var i = 0; i < 4; i++ ) {
    output.push(arr[i][0] + arr[i][1] + arr[i][2] + arr[i + 1][1] + arr[i + 2][0] + arr[i + 2][1] + arr[i + 2][2])
    output.push(arr[i][1] + arr[i][2] + arr[i][3] + arr[i + 1][2] + arr[i + 2][1] + arr[i + 2][2] + arr[i + 2][3])
    output.push(arr[i][2] + arr[i][3] + arr[i][4] + arr[i + 1][3] + arr[i + 2][2] + arr[i + 2][3] + arr[i + 2][4])
    output.push(arr[i][3] + arr[i][4] + arr[i][5] + arr[i + 1][4] + arr[i + 2][3] + arr[i + 2][4] + arr[i + 2][5])
  }
  

  console.log(Math.max(...output))

}