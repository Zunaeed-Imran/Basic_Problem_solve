// this program will show LCM of two number

let num1 = prompt('Enter 1st number for LCM');
let num2 = prompt('Enter 2nd number for LCM');

let res1 = 1;
let res2 = 1;

for (let i = 0; i <= num1; i++) {
  if (num1 % i === 0) {
    res1 = i;
  }
}

for (let i = 0; i <= num1; i++) {
  if (num2 % i === 0) {
    res2 = i;
  }
}
document.write(res1 * res2);

// We first input two numbers
// দুইটা ভেরিয়েবল নিয়েছি যাতে for লোপের ভিতর থেকে মানটা নিতে পারি 
// দুইটা মানের জন্য দুইটা forloop নিয়েছি
// লসাগু এর নিয়মে ভাগফল যেগুলো শূন্য হয় সবগুলো গুন করে দিয়েছি