// this program will show maximum number of handshake
// Formula: n*(n-1)/2

let num = prompt("Enter a number to see maximum number of handshake");

let res1 = num - 1;
let res2 = num * res1;

let result = res2 / 2;

document.write(result);