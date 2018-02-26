/*
input
The first line contains an integer, N (the number of integers in A). 
The second line contains N space-separated integers describing A.

output
Print all N integers in A in reverse order as a single line of space-separated integers.
Sample Input

4
1 4 3 2

Sample Output

2 3 4 1
*/

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var output = '';
    for(var i = arr.length - 1; i >= 0; i--) {
        output += arr[i] + " ";
    }
    console.log(output)
    return output;

}