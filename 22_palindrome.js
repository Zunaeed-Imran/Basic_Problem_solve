// Making a program Palindrome or not

//what is Palindrome:  reverse the digits of the number and compare it with the original number. If the reversed number is the same as the original number, then the number is a palindrome.


let num = prompt('Enter a number to see palindrome or not');
let spl = num.split('');
let rev = spl.reverse();
let join = rev.join('');

document.write(num + '<br>'); // for checking out put
document.write(rev + '<br>'); // for checking output

if (num === join) {
  document.write(num + ' is Palindrome Number');
} else {
  document.write(num + ' is Not a Palindrome Number');
}
