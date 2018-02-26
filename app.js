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
// val = list.children;



console.log(val);