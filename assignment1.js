// ASSIGNMENT 1 - DESTRUCTURING
console.group("Assignment 1 - Destructuring");

function getAverage() {
  const obj = { x: 3.6, y: 7.8, z: 4.3 };
  // const x = obj.x;
  // const y = obj.y;
  // const z = obj.z;
  // YOUR CODE STARTS HERE
  const { x, y, z } = obj;
  console.group("getAverage();");
  console.log("const obj = { x: 3.6, y: 7.8, z: 4.3 };");
  console.log("const { x, y, z } = obj;");
  console.log("console.log(obj);", obj);
  console.groupEnd();
  return Math.floor((x + y + z) / 3.0);
}
console.log(getAverage());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getAddress() {
  let coderschool = {
    city: "HCMC",
    country: "Vietnam",
    address: {
      number: 12,
      street: "Ton Dan",
      district: "4",
    },
  };
  // YOUR CODE STARTS HERE
  let {
    city,
    country,
    address: { number, street, district },
  } = coderschool;
  console.group("getAddress();");
  console.log(
    "let coderschool = { city: 'HCMC', country: 'Vietnam', address: { number: 12, street: 'Ton Dan', district: '4',},}"
  );
  console.log(
    `let { city, country, address: { number, street, district },} = coderschool;`
  );
  console.log("console.log(coderschool);", coderschool);
  console.groupEnd();
  return city === "HCMC" && country === "Vietnam" && street === "Ton Dan";
}
console.log(getAddress());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getElements() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  // refactor the lines below
  // const first = arr[0];
  // const third = arr[2];
  // const fourth = arr[4];
  // YOUR CODE STARTS HERE
  const [first, , third, fourth] = [0, , 1, 2];
  console.group("getElements();");
  console.log("const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];");
  console.log("const [first, , third, fourth] = [0, , 1, 2];");
  console.log("return { first, third, fourth };");
  return { first, third, fourth };
}
console.log(getElements()); //to show the return values of return { first, third, fourth };
console.groupEnd();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getNestedElements() {
  const food = [
    ["carrots", "beans", "peas", "lettuce"],
    ["apples", "mangos", "oranges"],
    ["cookies", "cake", "pizza", "chocolate"],
  ];
  // refactor the lines below
  // const carrots = food[0][0];
  // const cookies = food[2][0];
  // const mangos = food[1][1];
  // YOUR CODE STARTS HERE

  const [[carrots], [, mangos], [cookies]] = food;
  console.group("getNestedElements();");
  console.log(
    ` const food = [
      ["carrots", "beans", "peas", "lettuce"],
      ["apples", "mangos", "oranges"],
      ["cookies", "cake", "pizza", "chocolate"],
    ];`
  );
  console.log(`const [[carrots],[ , mangos],[cookies]] = food;`);
  console.log(` return { carrots, cookies, mangos };`);
  return { carrots, cookies, mangos };
}

console.log(getNestedElements());
console.groupEnd();
console.groupEnd();
