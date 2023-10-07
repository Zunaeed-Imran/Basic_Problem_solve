// Making a program prime number or not

let num = prompt('Enter a number to see prime number or not');

for (var i = 1; i <= num; i++){

  if (num % num === 0 && num > 1 && num % 2 != 0) {
    document.write(num + ' is Prime Number.');
  } else{
    document.write(num + ' is Not a Prime Number.');
  }

}


