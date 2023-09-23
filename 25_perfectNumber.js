// That program can see the number is perfect or not
// Example's,  6 = 3 + 2 + 1, and 28 = 14 + 7 + 4 + 2 + 1.
// is equal to the number itself.

let num = prompt('Enter a number to see perfect or not');
let sum = 0;
for (let i = 0; i <= num/2; i++) {
  if (num % i === 0) {
    sum += i;
  }
}

if (num == sum) {
  document.write(num + " is Perfect Number.");
} else{
  document.write(num + " is Not Perfect Number.");
}