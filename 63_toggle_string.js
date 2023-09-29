// This program will ছোট হাতের লেখা বড় এবং বড় হাতের লেখা ছোট করবে

let str = prompt("Enter lower or upper case string")

let low = str.toLowerCase();
let upp = str.toUpperCase();

if (str === str.toUpperCase()) {
  document.write(low);
} else if (str === str.toLocaleLowerCase()) {
  document.write(upp);
}
