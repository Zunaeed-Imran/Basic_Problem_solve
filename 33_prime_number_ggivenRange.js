// this program will show the prime number in a given range

let num = prompt('Enter Range number to see list of prime number');

let n = 0;

for (let i = 0; i <= num; i++){
  document.write(i+" ");
}


if (num % num === 0 && num > 1 && num %2 != 0) {  // any other number cant be devided that's why "num%2!=0"
  document.write(num + " is a Prime Number");
} else {
  document.write(num + " Not Prime Number");
}