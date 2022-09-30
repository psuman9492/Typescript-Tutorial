console.log("Welcome to Type-Script - Madan");

// enum can be used to store a paticular value in a varible and use the variable name to acess the value stored in the enum.

enum directions {
  //   north = "^",
  north = "nor",
  south = "v",
  east = ">",
  west = "<",
}

// const way = {
//   result : string
// };

const result =
  "first go " + directions.north + " " + "then go " + directions.west;

console.log(result);

// if we have used directions.north at mutiple places and want to chnage the
//  values instead of chnaging at all the places we can chnage it in the enum
// value from '^' to 'nor'

// then the result will be chnaged with out chnaging the code
