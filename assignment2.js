// ASSIGNMENT 2 - REST AND SPREAD
console.group("Assignment 2 - Rest and Spread");

//Replace "YOUR_ANSWER" with the right argument(s) so that it prints out true.
function restParameters(first, ...rest) {
  return rest[0] === 1 && rest[1] === 2;
}
console.log(restParameters("hi", 1, 2)); //the value of first can be anything, but based on the retun statement rest values has to be 1 and 2

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Refactor this with destructuring and rest in one statement.
function ontoAnObject() {
  const array = [1, 2, 3, 4, 5, 6];
  const object = {};
  // refactor the lines below
  // object.one = array[0];
  // object.two = array[1];
  // object.three = array[2];
  // object.rest = array.slice(3);
  // YOUR CODE STARTS HERE
  [object.one, object.two, object.three, ...object.rest] = array;
  console.group("ontoAnObject();");
  console.log("return object; ");
  return object;
}
console.log(ontoAnObject());
console.groupEnd();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Use Math.max() and spread operator to find the maximum number in both arrays.
function findTheMax() {
  const arr1 = [1, 7, 2, 4];
  const arr2 = [1, 9, 5, 8];
  console.group("findTheMax()");
  console.log(`const arr1 = [1, 7, 2, 4];
    const arr2 = [1, 9, 5, 8];`);
  console.log(`Math.max(...arr1, ...arr2);`);
  return Math.max(...arr1, ...arr2); //this expression produces max value between arr1 and arr2
}
console.log(findTheMax());
console.groupEnd();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Merge those arrays into one using spread operator in one statement.
function concatenateArrays() {
  //meaning to merge two or more arrays into one array
  const arr1 = [0, 1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];
  const result = [...arr1, ...arr2, ...arr3]; //This expression concatenate 3 arrays into one
  console.group("concatenateArrays()");
  console.log(`const arr1 = [0, 1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];`);
  console.log(`const result = [...arr1, ...arr2, ...arr3];`);
  console.log(`return result; `);
  return result;
}
console.log(concatenateArrays());
console.groupEnd();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Put your answers in to make it return true.
function mergeObjects() {
  // what does this return?
  const obj1 = {
    a: "a from obj1",
    b: "b from obj1",
    c: "c from obj1",
    d: {
      e: "e from obj1",
      f: "f from obj1",
    },
  };
  const obj2 = {
    b: "b from obj2",
    c: "c from obj2",
    d: {
      g: "g from obj2",
      h: "h from obj2",
    },
  };
  const result = { ...obj1, ...obj2 };
  console.log(result);
  return (
    result.a === "a from obj1" &&
    result.b === "b from obj2" &&
    result.c === "c from obj2" &&
    result.d.e === undefined &&
    result.d.f === undefined &&
    result.d.g === "g from obj2" &&
    result.d.h === "h from obj2"
  );
}
console.log(mergeObjects());
