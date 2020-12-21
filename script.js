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

//~~~~~~~~~

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
console.groupEnd();
