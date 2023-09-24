// This program will show the Abundant Number of the input number.

let num = prompt('Enter a number to see the Abundant Number');
let sum = 0;
for (let i = 0; i < num; i++){
  if (num % i === 0) {
    sum += i;
  }
}
if (sum >= num) {
  document.write(num + " is Abundant Number"+"<br>");
} else {
  document.write(num + " is not Abundant Number"+"<br>");
}
