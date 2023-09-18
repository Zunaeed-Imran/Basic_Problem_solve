const users = [
  { firstName: 'akshay', lastName: 'kumar', age: 23 },
  { firstName: 'Sharook', lastName: 'Khan', age: 60 },
  { firstName: 'Salman', lastName: 'Khan', age: 70 },
  { firstName: 'Amir', lastName: 'khan', age: 50 },
];

const output = users.map(
  x => x.firstName + '  ' + x.lastName + '  ' + x.age + '<br>'
);

document.write(output);
