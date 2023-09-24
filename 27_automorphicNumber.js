// this program will show tha number is automorphic or not.
// Example: Input  : N = 25
// Output : Automorphic
//   As 25*25 = 625

let num = prompt('Enter a number to see Automorphic Number or Not');

let sqr = Math.pow(num, 2);

document.write((num % 10) + '<br>'); // it will show tha last digit of number
document.write((sqr % 10) + '<br>'); // it will show the last digit of sqr number

if (sqr % 10 === num % 10) {
  document.write(num + ' is Automorphic Number');
} else {
  document.write(num + ' is Not Automorphic Number');
}
