// var numbers = [45, 4, 9, 16, 25];
// var over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18, index, array;
// }

// console.log(over18)

var list = ["h", "e", "l", "l", "o"];
var newlist = list.sort().map(function (currElement, index) {
  console.log(index, currElement);
  return currElement 
});
console.log(list)



