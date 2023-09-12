// Greatest of three numbers

let num1 = prompt("Enter 1st number");
let num2 = prompt("Enter 2nd number");
let num3 = prompt("Enter 3rd number");

if(num1 > num2 || num1 > num3){
    document.write(num1 + " is Big Number");
}else if(num2 > num1 || num2 > num3){
    document.write(num2 + " is Big Number");
}else if(num3 > num1 || num3 > num2){
    document.write(num3 + " is Big Number");
}