// For example, let the input number be 719. The sum of digits of 719 = 7 + 1 + 9 = 17

let num = prompt('Enter any number digit');

let sum = 0;

for (let i = 0; i < num.length; i++){        // Here if we use "<=" it won't work.
  sum += parseInt(num[i]);
}
document.write(sum);
