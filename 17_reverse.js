let num = prompt("Enter a number");

let spl = num.split("");
let re = spl.reverse();
let result = re.join();
document.write(result);