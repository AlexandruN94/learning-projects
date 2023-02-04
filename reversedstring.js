// function reversedStringMethods(str) {
//   return str.split('').reverse().join('');

// }
// reversedStringMethods('Hello');

function reversedStringFor(str) {
  let string = '';
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
}

console.log(reversedStringFor('Hello'));
