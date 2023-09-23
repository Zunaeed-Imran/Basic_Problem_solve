// For example, let the input number be 719. The sum of digits of 719 = 7 + 1 + 9 = 17

let num = prompt('Enter any number digit');

let spl = num.split();

let result = spl.reduce((a, c) =>  a + c);

document.write(result);
