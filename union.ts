// union tyoe - if a value iin a variable is of multiple types then general
// notation will give error that is senario where we can use union types in
// which we can create a new type with the cobmination two or more types and
// assigning them to the variable.

// suppose if we are getting input from use and the input might be a number or a string

function combining(a: number | string, b: number | string) {
  let result;
  debugger;
  if (typeof a === "number" && typeof b === "number") {
    result = a + b;
  } else {
    const c = a.toString();
    const d = b.toString();
    result = c + d;
  }
  return result;
}

const sentence = combining("Madan", "Mohan");
console.log("Name- " + sentence);

const addition: number = combining(30, 4);
console.log("Age- " + addition);
