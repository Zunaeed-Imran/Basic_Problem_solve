// This program will show ইউজার ইনপুটে কতটি vowel সংখ্যা দিচ্ছে একটি.


// let n = 0;




let input = prompt("Enter Alphabet");

for (var i = 0; i <= input.length; i++){

  if (input === "a" || input=== "e" || input === "i" || input === "o" || input === "u") {
    document.write(input + " is vowel");
  }
  
}









// for (let i = 0; i < str.length; i++){
//   n += i;
  
// }
// document.write(n);










// if (str[i] == "a" || "e" || "i" || "o" || "u") {
//   document.write("vowel");
// } else if(str[i] == "b" || "c" || "d" || "f" || "g" || "h" || "j" || "k" || "l" || "m" || "n" || "p" || "q" || "r" || "s" || "t" || "v" || "w" || "x" || "y" || "z") {
//   document.write("consonent");
// }