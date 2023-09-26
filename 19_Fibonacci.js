// Example of Fibonacci Sequence = 0, 1, 1, 2, 3, 5, 8, 13, 21

let num = prompt('Enter a number to Fibonacci series');

let sum = 1;


for (let i = 0; i <= num; i++) {
  
  for (let n of Number(num[i])) {
    sum += n;
  }
}
document.write(sum);
