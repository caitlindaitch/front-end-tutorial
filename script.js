var value = Math.random() * 10;
var int = Math.floor(value);
var testGroup = int % 2 === 0;

console.log(testGroup)

window.localStorage.setItem('user', JSON.stringify(person));