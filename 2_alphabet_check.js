let alpha = prompt("Enter any Alphabet");  // const won't work in this case.

switch(alpha){
    case alpha = "a":
    document.write(alpha + " is Alphabet.");
    break;
    default:
    document.write(alpha + " is Not an Alphabet.");    
}