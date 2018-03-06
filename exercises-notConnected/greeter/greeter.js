var name = prompt('What is your name?');

var checkName = function() {
  if(name === "") {
    name = prompt('What is your name, for real this time?');
    checkName();
  }
}
console.log('Hello World');
checkName();
alert('Hello ' + name);
