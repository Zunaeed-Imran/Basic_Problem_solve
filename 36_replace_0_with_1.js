// this program will replace all the input "zero" woth "one"

let num = prompt("Enter a 'zero' to make it 'one'");

let replace = num.replace(/0/g, "1"); // this will replace all with "1"
                                      // if i type ("0", "1") it will only cahnge one 0 to 1;


document.write(replace);
