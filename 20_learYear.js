// to see leap year or not

let year = prompt('Enter a year');

if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
  document.write(year + ' is leap year');
} else {
  document.write(year + ' is Not leap Year');
}
