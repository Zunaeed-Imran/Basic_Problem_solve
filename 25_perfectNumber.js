// That program can see the number is perfect or not
// Example's,  6 = 3 + 2 + 1, and 28 = 14 + 7 + 4 + 2 + 1.

let num = prompt('Enter a number to see perfect or not');
let n = 0;
for (let i = 1; i <= num / 2; i++) {
  n += i;
  console.log(n+"<br>");
  
  }

console.log("The Perfect Number is "+n);

if (num == n) {
  document.write("It is Perfect Number.");
} else{
  document.write("It is Not Perfect Number.");
}