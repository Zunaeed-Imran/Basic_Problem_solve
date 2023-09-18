// Factorial of a number

let num = prompt('Enter a number to factorial');
let factorial = 1;
for (let i = num; i >= 1; i--) {
  factorial *= i;
}
document.write(factorial);
