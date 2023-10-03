// we are gonna practic enasted for loop in this javascript program.

let n = prompt("Enter any number");


for (let i = 0; i < n; i++){
  for (let j = 0; j < i; j++){
    document.write(j + " ");
  }
}