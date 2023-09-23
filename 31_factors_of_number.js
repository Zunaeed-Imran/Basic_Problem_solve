// this program will show the input Factors number if tha given number

let num = prompt('Enter a number to see the factors');


for (let i = 0; i <= num; i++){
  if (num %i === 0) {
    document.write(i + "<br>");
  }
}