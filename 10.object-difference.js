// Story: you have two objects representing rectangles. Some properties are the same, same properties are different.

var rectangle1 = {
  width: 200,
  height: 400,
  color: 'black',
  x: 100,
  y: 200,
  border: true
};

var rectangle2 = {
  width: 100,
  height: 400,
  color: 'green',
  x: 400,
  y: 200,
  visible: false
};

// Task: implement difference function, which takes two objects as arguments, and returns an object,
// describing what is different or missing in object1 compared to object2.

// Example:
console.log(difference(rectangle1, rectangle2));

/*
{ width: 100,
  color: 'green',
  x: 400,
  border: undefined,
  visible: false }
*/