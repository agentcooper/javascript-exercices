// Implement rotate2d function, which can rotate 2d arrays

var map = [
  [0, 1, 0],
  [0, 1, 0],
  [1, 1, 1]
];

console.log(rotate2d(map, -1));
/*
[
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 1]
]
*/

console.log(rotate2d(map, +1));
/*
[
  [1, 0, 0],
  [1, 1, 1],
  [1, 0, 0]
]
*/