// Thsi program will show if the input two array are same or not
// we use only for string not number value.

let in1 = prompt("Enter 1st input for array");
let in2 = prompt("Enter 2nd input  for array");

let spl1 = in1.split("");
let spl2 = in2.split("");
let p1;
let p2;

for (let i = 0; i < spl1.length && spl2.length; i++){

  if (spl1[i] === spl2[i]) {
    p1 = true;
  } else if (spl1[i] != spl2[i]) {
    p2 = true;
  }
}

if (p1 == true) {
  document.write("the input array are same" + "<br>");
} else if (p2 == true) {
  document.write("the input array are Not the same" + "<br>");
}












