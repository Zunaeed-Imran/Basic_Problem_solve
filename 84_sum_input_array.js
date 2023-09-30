// This program will adding all the input array element

let input = prompt("Enter some number to add");

let arr = input.split("");   // remember to use ("") in split. it won't work without that.
let sum = 0;

for (let i = 0; i < arr.length; i++){
  sum += parseInt(input[i]);
}

document.write(sum);

