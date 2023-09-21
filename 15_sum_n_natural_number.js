//This program will show Sum of N natural numbers

let num = prompt('Enter a number to see sum of natural number');
let sum = 0;
for (let i = 0; i <= num; i++) {
  sum += i;
}
document.write(sum);
