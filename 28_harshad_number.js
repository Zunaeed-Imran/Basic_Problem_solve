// this program will see harshad Number or not

// 1 + 5 + 6 = 12. Since 156 is divisible by 12. So, 156 is a Harshad number.

let num = prompt('Enter a Number to see Harshed Number or not');

let sum = 0;

for (let i = 0; i < num.length; i++){  // frist we make number split and sum of it
  sum += Number(num[i]);
}

// document.write(sum);


if (num % sum === 0) {
  document.write(num + " is Harshed Number");  // than we compare is it devided or not
} else {
  document.write(num + " Not Harshed Number");
}