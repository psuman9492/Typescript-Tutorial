const person = {
  name: "Madan",
  age: 27,
  status: "F1",
};

console.log(person.name);

// we can also specify the what are the types in object by

const address: {
  streetname: string;
  housenumber: number;
  zipcode: number;
  city: string;
} = {
  streetname: "gayatrinagar",
  housenumber: 42 - 32 - 1 / 2,
  zipcode: 500040,
  city: "hyderabad",
};
console.log(address.streetname);

// but declaring the type in objects is unessary since type script will uatomatically assign the defacutl type by the value assigned.
