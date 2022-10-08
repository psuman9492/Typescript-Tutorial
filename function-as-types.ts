// Funtion as types
// we can have function and then a variable with let
// then asign the variable to the function and specify the variable type to function.
// the downside is we can assign any function and TS will not show any error.

//  to avois the above error
// we assign the return type pf the varibale alog with the paramerts to that need to be passed.

function merge(n1: string, n2: string) {
  // this is the funtion to merge the names
  return n1 + n2;
}

function add(x1: number, x2: number) {
  // this is the funtion to merge the numbers
  return x1 + x2;
}

// to use the merge function as type

let fullname: (a: string, b: string) => string;
fullname = merge;
// if we use full name = add we will get error since the arguments passed are specified as strings and return value is string too
console.log(fullname("madan ", "mohan"));

// to use the add function as type

let addition: (c: number, d: number) => number;
addition = add;
// if we use full name = merge we will get error since the arguments passed are specified as numbers and return value is number too
console.log(addition(2, 3));
