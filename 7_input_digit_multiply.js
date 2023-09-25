// we gonna use inut digit sum of it

let j = prompt("Enter a number to sum of it");
let sum = 1;

for (let i = 0; i < j.length; i++){
  sum *= parseInt(j[i]);
}
document.write(sum);