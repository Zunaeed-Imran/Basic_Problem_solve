//  Check the input number is positive negative or zero

let num = prompt("Enter any Number");

if(num === "0"){
    document.write(num + " You Entered Zero");
}else if(num >= "0"){
    document.write(num + " Number is Positive");
}else if(num <= "0"){
    document.write(num + " Number is Negative");
}else{
    document.write("Enter any number not alphabet or symbol");
}