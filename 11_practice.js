// vowel and consonent practicing


let input = prompt("Enter Alphabet");

for (var i = 0; i <= input; i++){

}
if (input === "a" || input=== "e" || input === "i" || input === "o" || input === "u") {
  document.write(input + " is vowel");
} else if(input === "b" || input === "c" || input === "d" || input === "f" || input === "g" || input === "h" || input === "j" || input === "k" || input === "l" || input === "m" || input === "n" || input === "p" || input === "q" || input === "r" || input === "s" || input === "t" || input === "v" || input === "w" || input ===  "x" || input === "y" || input === "z") {
  document.write(input + " is consonent");
} else {
  document.write(input + " Not valid input");
}



