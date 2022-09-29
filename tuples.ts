// Tuples- tuple is an array of fixed length and type

const person: {
  name: string;
  age: number;
  hobbies: string[];
  bloodpressure: [number, string];
} = {
  name: "madan",
  age: 27,
  hobbies: ["cooking", "sketching"],
  bloodpressure: [170, "good"],
};
// tupils can be utilized in special senarios but for tuples to be running perfectly we need to specify object type
// now we can oly push the appropriate type value to the correct  index of the array.
// push is execption.
person.bloodpressure.push("normal");
// if push is used the value can be inserted in the array irrespective of the type.

console.log(person.bloodpressure[1]);
