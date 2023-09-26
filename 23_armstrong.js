// write a program to check Armstrong Number or Not

let num = prompt('Enter a number to see armstrong Number or Not');  // we take input First

let sum = 0;                                                     // we take "sum" variable for sum in loop
let p = 0;                                                    // we take "p" variable for power in tha loop value

for (let i = 0; i < num.length; i++) {                     // Here if we use "<=" it won't work.

  p = Math.pow(Number(num[i]), 3);                     // we use "Number" make string to number in given value array
  sum += p;                                                // we adding the power to compare the input.
}


// document.write(sum + " " + num);

if (num == sum) {                                      // if i use "===" it would't work becouse  
  document.write(num + " is an Armstrong Number");     // now it is number compare. 
} else {                                               // if we use srting and number compare we can use "=="
  document.write(num + " is Not Armstrong Number");
}


