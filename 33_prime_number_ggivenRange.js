// this program will show the prime number in a given range



let num = prompt('Enter Range number to see list of prime number');


for (let i = 1; i <= num; i++){

  if (i % i === 0 && i > 1 && i %2 != 0) {  // any other number can,t be devided that's why "num%2!=0"
    document.write(i + " is a Prime Number" + "<br>");
  } else {
    document.write(i + " Not Prime Number" + "<br>");
  }

}