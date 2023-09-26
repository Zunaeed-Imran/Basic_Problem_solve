// Example of Fibonacci Sequence = 0, 1, 1, 2, 3, 5, 8, 13, 21

let num = prompt('Enter a number to Fibonacci series');

let sum = 0;


for (let i = 0; i <= num; i++) {
  sum = i;
}

const result = sum.toString("");
const res2 = result.split("");
const res3 = res2.reduce((a, c) => a + c);
document.write(res3);
