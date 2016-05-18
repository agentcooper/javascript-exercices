// implement assign function, which behaves like this:

var z = { a: 1 };

assign(z, { b: 2, c: 3 });

// z now equals to { a: 1, b: 2, c: 3 }

var b = assign({}, { stuff: 1 }, { moreStuff: 2, otherStuff: 3 }, { evenMoreStuff: 4 });

// b is now { stuff: 1, moreStuff: 2, otherStuff: 3, evenMoreStuff: 4 }