let num = prompt("Entr a numbe");

let sum = 0;

for (let i = 0; i < num.length; i++){
  sum += Number(num[i]);
}
document.write(sum);