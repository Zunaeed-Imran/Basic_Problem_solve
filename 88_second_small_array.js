// This program will show second smallest input array element

let arr = prompt('Enter array Element');

let spl2 = arr.split('');

let arrsor = spl2.sort();

// let arrsor = spl.reverse();

let ls;
let lm;
for (let i = 0; i < arrsor.length; i++) {
  ls = arrsor[i];

  for (let j = arrsor[i]; j > 0; j--) {
    lm = arrsor[j];
  }
}
document.write(lm);



// first we take input a value
// than split it and make it array
// than sorting the array to take the max or min input value
// than take a variable for using in for loop
// than we run for-loop
// in for loop we take value for '0' to 'input array reverse value'

// than use tha variable to take the value of last 'i' value
//me make another loop becouse we need 2nd smallest one (in one for loop '<' it work like '<=' in array)

// than we use 2nd variable in for-loop for-loop

// than print the value out side of the for-loop
// it worked becouse we use '<' that's why. 
// if we use '<=' than it will show the smallest input 
