const person = {
  name: "madan",
  age: 28,
  hobbies: ["sketching", "cooking"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
