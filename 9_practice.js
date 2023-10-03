// Practicing for loop with using comma,,,


let input1 = prompt("Enter Number with given space");

let spl = input1.split(',');

let sum = 0;

for (let i = 0; i < spl.length; i++){
  
  sum+= spl[i]

  document.write(sum + " ");
}

