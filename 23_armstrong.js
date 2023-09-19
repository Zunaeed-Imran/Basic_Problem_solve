// write a program to check Armstrong Number or Not

let num = prompt('Enter a number to see armstrong Number or Not');

let spl = num.split('');

let sqr1 = spl[0] * spl[0] * spl[0];
let sqr2 = spl[1] * spl[1] * spl[1];
let sqr3 = spl[2] * spl[2] * spl[2];
let sqr4 = spl[3] * spl[3] * spl[3];
let sqr5 = spl[4] * spl[4] * spl[4];

document.write(sqr1 + sqr2 + sqr3 + '<br>');

if ((sqr1+ sqr2 + sqr3) === num) {
  document.write(num + ' is Armstrong Number');
} else {
  document.write(num + ' is Not Armstrong Number');
}
