// Making a program Palindrome or not

let num = prompt('Enter a number to see palindrome or not');
let spl = num.split('');
let rev = spl.reverse();
let join = rev.join();

if (num === join) {
  document.write(num + ' is Palindrome Number');
} else {
  document.write(num + ' is Not a Palindrome Number');
}
