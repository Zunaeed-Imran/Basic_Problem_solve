// This program will show the input two number GCD

let num1 = prompt('Enter 1st number for GCD');




function fast(num1){
  let res1 = [];
  for (let i = 0; i < num1; i++){
    if (num1 % i === 0) {
      res1 = i;
      document.write(res1);
    }
  }
  return res1;
}

function end(num1) {
  let res2 = [];
  for (let i = 0; i < num2; i++){
    if (num2 % i === 0) {
      res2 = i;
    }
  }
  return res2;
}
  

let inputone = fast()








const GCD = res1.filter(value => res2.includes(value));
