// this program will show tha input array type

let input = prompt("Enter any array to see type");

let arr = input.split("");


for (let i = 0; i < arr.length; i++){

  if (arr === arr.Number("")) {
    document.write("This array type is number");
  } else if (arr[i] === arr[i].join("")) {
    document.write("This array is string stpe");
  } else if (arr === arr.concat("")) {
    document.write("This array is concat type");
  }

}

