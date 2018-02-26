let val;

// This will going to the first ul element with the class of 'collection' but with the element we also get its child that are all list items under the parent 'ul'
const list = document.querySelector('ul.collection');
// This will going to select the first list item
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get Child Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get Children element Nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// Children of Children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child Elements
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

console.log(val);