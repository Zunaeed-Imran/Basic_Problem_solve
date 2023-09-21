// this program will Factors if tha given number

let num = prompt('Enter a number to see the factors');

let n = 0;

for (let i = 1; i <= Math.trunc(num / 2); i++) {
  n = i;
  document.write(i + '<br>');

  // document.write(i + '<br>');
}

document.write(num);
