let num = prompt("Enter any Number");

switch(num){
    case num >= Number("1"):
    document.write(num + " is Positive.");
    break;

    case num < Number("0"):
    document.write(num + " is Positive.");
    break;

    case num = Number("0"):
    document.write(num + " You Entered Zero.");
    break;
    
    default:
    document.write("Enter Any Number Not Alphabet");    
}