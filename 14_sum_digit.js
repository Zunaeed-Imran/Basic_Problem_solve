// For example, let the input number be 719. The sum of digits of 719 = 7 + 1 + 9 = 17

let num = prompt("Enter any Number");
const num1 = num.split("");
let sum;
for(let i = num1[0]; i <= num1[5]; i++){
    sum+=i;
}

document.write(sum);
