// literal type -  iteral type dosent specify the type f the value stored in a
// variable but, the exact value that is stored in that varible.

function combining(
  a: number | string,
  b: number | string,
  c: "as-number" | "as-string"
) {
  let result;
  if ((typeof a === "number" && typeof b === "number") || c === "as-number") {
    result = +a + +b;
  } else {
    const c = a.toString();
    const d = b.toString();
    result = c + " " + d;
  }
  return result;
}

const sentence = combining("Madan", "Mohan", "as-string");
console.log("Name- " + sentence);

const addition: number = combining(30, 4, "as-number");
console.log("Age- " + addition);
