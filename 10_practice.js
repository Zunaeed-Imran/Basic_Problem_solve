// we are gonna practic enasted for loop in this javascript program.

let n = prompt("Enter any number");


for (let i = 0; i <= n; i++){
  for (let j = i; j > 0; j--){
    document.write(j + "<br>");
  }
}