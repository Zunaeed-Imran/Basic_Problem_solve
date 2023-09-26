// this program will show the prime number in a given range

let num = prompt('Enter a number to see prime Number');

if (num % num == 0 && num % 1 == 0) {
  document.write(num + " is a Prime Number");
} else {
  document.write(num + " is not Prime Number");
}