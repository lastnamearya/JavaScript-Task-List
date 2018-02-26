// set local storage item
localStorage.setItem('name', "John");
localStorage.setItem('age', "30");

 
// set session storage
sessionStorage.setItem('name', 'Beth');

// // remove from storage
// localStorage.removeItem('name');

// get from storage 
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// clear the storage
localStorage.clear();
console.log(name, age);