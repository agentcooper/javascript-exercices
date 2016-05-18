// Story: you decided to ask your friends what is their favourite color. It is a hard question, everyone takes their time to answer.

function askJohn(callback) {
  setTimeout(function() { callback('black'); }, 1000);
}

function askDavid(callback) {
  setTimeout(function() { callback('blue'); }, 2000);
}

function askLarry(callback) {
  setTimeout(function() { callback('green'); }, 1500);
}

// Task: implement whenAll function, which can be used like this:

whenAll(askJohn, askDavid, askLarry, function(colors) {
  console.log(colors); // ['black', 'blue', 'green']
});
