// This program will show sum of positive square array elament
// Example: 
//   Input:        1 2 3 4 5
//  Square:        1 4 9 16 25
//     sum:        1+4+9+16+25 = 55

let arr = prompt("Enter array Number");

let spl = arr.split("");

let square = 0;
let sum = 0;

for (let i = 0; i < spl.length; i++){
  square = parseInt(Math.pow(spl[i], 2));
  sum += square;
}

document.write(sum);

// first we take input 
// than make it array by split
// than take two variable 'square' & 'sum'
// we use for loop from '0' to 'input.length' becouse only to take specific number
// than in for loop we use parseInt for make the string number
// than we take math.pow to power the every single array
// than in for loop we just sum of all the power array value
// just it as simple as that