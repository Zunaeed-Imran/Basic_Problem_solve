//Make a program to see the number is friendly pair or not

let num = prompt("Enter a number to see the number is amicable or not")

let res1 = 0;
let res2 = 0;

for (let i = 0; i <= num / 2; i++) {
  if (num % i === 0) {
    res1 += i;
  }
}
// document.write(res1);

for (let i = 0; i <= res1 / 2; i++) {
  if (res1 % i === 0) {
    res2 += i;
  }
}

// document.write(res2);

if (num == res2) {
  document.write(num + " is a Amicable or Friendly pair Number");
} else {
  document.write(num + " is Not Amicable  or Friendly pair Number");
}