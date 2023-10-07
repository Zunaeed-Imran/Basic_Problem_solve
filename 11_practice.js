// vowel and consonent practicing

let input = prompt("Enter Alphabet");

for (var i = 0; i <= input.length; i++){

}
if (input.length === "a" | "e" | "i" | "o" | "u") {
  document.write(input + " is vowel");
} else if(input.length == "b" || "c" || "d" || "f" || "g" || "h" || "j" || "k" || "l" || "m" || "n" || "p" || "q" || "r" || "s" || "t" || "v" || "w" || "x" || "y" || "z") {
  document.write(input + " is consonent");
} else {
  document.write(input + " Not valid input");
}



