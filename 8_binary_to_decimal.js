// this program will Decimal the input Binary number.


// we only can use 6 digit with out using for loop we have to use it like that


let num = prompt('Enter a Binary number to Decimal it it');

let spl = num.split('');

let n1 = Math.pow(2, 5);
let n2 = Math.pow(2, 4);
let n3 = Math.pow(2, 3);
let n4 = Math.pow(2, 2);
let n5 = Math.pow(2, 1);
let n6 = Math.pow(2, 0);

let re1 = spl[0] * n1;
let re2 = spl[1] * n2;
let re3 = spl[2] * n3;
let re4 = spl[3] * n4;
let re5 = spl[4] * n5;
let re6 = spl[5] * n6;

document.write(re1 + re2 + re3 + re4 + re5 + re6);
