// ASSIGNMENT 2 - REST AND SPREAD
console.group("Assignment 2 - Rest and Spread");

function restParameters(first, ...rest) {
  return rest[0] === 1 && rest[1] === 2;
}
console.log(restParameters("hi", 1, 2)); //the value of first can be anything, but based on the retun statement rest values has to be 1 and 2

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function ontoAnObject() {
// 	const array = [1, 2, 3, 4, 5, 6];
// 	const object = {};
// 	// refactor the lines below
// 	object.one = array[0];
// 	object.two = array[1];
// 	object.three = array[2];
// 	object.rest = array.slice(3);
// 	// YOUR CODE STARTS HERE
//   // const object array;
// 	return object;
// }
