// this program will see harshad Number or not

// 1 + 5 + 6 = 12. Since 156 is divisible by 12. So, 156 is a Harshad number.

let num = prompt('Enter a Number to see Harshed Number or not');

let num2 = num.split('');

let sum = num2[0, 1, 2, 3];

if (num / sum === 0) {
  document.write(num + " is Harshed Number");
} else {
  document.write(num + " Not Harshed Number");
}