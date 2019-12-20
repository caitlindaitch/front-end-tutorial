var value = Math.random() * 10;
var int = Math.floor(value);
var testGroup = int % 2 === 0;

let button = document.getElementById("invest-cta");

if (testGroup) {
  button.innerHTML = "Invest $500 now";
} else {
  button.innerHTML = "Invest now";
}


// window.localStorage.setItem('user', JSON.stringify(person));