// This program will show longest Palindrome in array

let num1 = prompt("Enter any input to see longest palindrome");
let num2 = prompt("Enter any input to see longest palindrome");

let num3 = num1.split("");
let num4 = num2.split("");

let num5 = num3.reverse("");
let num6 = num4.reverse("");

let num7 = num5.join("");
let num8 = num6.join("");



if (num1 == num7  && num7 > num8) {
  document.write(num7 + " is Longest Palindrome number" + "<br>");
} else if (num2 == num8 && num7 < num8) {
  document.write(num8 + " is Longest Palindrome Number" + "<br>");
} else {
  document.write(num1 + " not a palindrome number " + " also Number " + num2 + " is Not palindrome number");
}

// 1st we apply 1st input condation.
// than we apply 2nd input condation.