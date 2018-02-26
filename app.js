// document.getElementsByClassName

// IT'll select items on the behalf of Global Scope.
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = "red";
items[3].textContent = "Hello";

// This selection is limited to Local Scope Only
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);