// Story: you a familiar with map and filter functions for arrays. You also stared to notice that objects and arrays are kinda similar.

var people = {
  harry: 13,
  hermione: 12,
  dumbldore: 60
};

// Task 1: implement mapObject function
console.log(
  mapObject(people, function(age) { return age + 1; })
);
/*
{ harry: 14, hermione: 13, dumbldore: 61 }
*/

// Task 2: implement filterObject function

console.log(
  filterObject(people, function(age) { return age > 40; })
);
/*
{ dumbldore: 60 }
*/