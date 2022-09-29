function add(a: number, b: number, c: string, d: boolean) {
  if (d) {
    console.log(c + (a + b));
  }
  return a + b;
}

const number1 = 10;
const number2 = 4;
const phrase = "The result of the sumation is: ";
const inputvalue = true;

const additionvalue = add(number1, number2, phrase, inputvalue);
