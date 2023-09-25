// This program will show the input two number GCD

let num1 = prompt('Enter 1st number for GCD');
let num2 = prompt('Enter 2nd number for GCD');

let res1 = 0;

for (let i = 0; i <= num1; i++) {
  if (num1 % i === 0) {
    
        for (let j = 0; j <= num2; j++) {
          if (num2 % j === 0) {
            if (j === i) {
              document.write(res1 + " is GCD of those number" + "<br>");
            }
          }
        }

  }
}
