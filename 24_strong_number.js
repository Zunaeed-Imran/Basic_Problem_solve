// making a program can say the number is strong number or not

let num = prompt('Enter a number to see strong or not');
let res1 = 0;
let res2 = 0;

for (let i = 0; i <= num / 2; i++){
  if (num % i === 0) {
    res1 += i;
  }
}
// document.write(res1);

for (let i = 0; i <= res1 / 2; i++){
  if (res1 % i === 0) {
    res2 += i;
  }
}

document.write(res1);
