var localStorageValue = "invest-cta";

var storedTestGroup = window.localStorage.getItem(localStorageValue);
var group;

if (!storedTestGroup) {
  var value = Math.random() * 10;
  var int = Math.floor(value);
  group = int % 2 === 0;
  window.localStorage.setItem(localStorageValue, group);
}

var button = document.getElementById("invest-cta");

if (group === true) {
  button.innerHTML = "Invest $500 now";
} else {
  button.innerHTML = "Invest now";
}

// add this back and the CTA will stay the same
// window.localStorage.setItem(localStorageValue, group);
window.localStorage.removeItem(localStorageValue);