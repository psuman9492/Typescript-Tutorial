// ARRAY-TYPE

const person = {
  name: "madan",
  age: 28,
  hobbies: ["cooking", "drawing"],
  // now hobbies will be assigned type string[]
};
// we can print all the hobbies of the person

for (const display of person.hobbies) {
  console.log(display);
  // we can use the avilable featires of string for the string[]
  console.log(display.toUpperCase());
}
