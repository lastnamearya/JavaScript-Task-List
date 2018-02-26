// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event Listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task Event
  form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e){
  if(taskInput.value === ''){
    alert("Add a task");
  }

  // Create li element
  const li = document.createElement('li');
  // Add class, for materialize css it's necassary that li elements have a sub class of ul i.e collection now here, it's collection-item
  li.className = "collection-item"; 
  // Create Text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // create new link element for X Delete Sign
  const link = document.createElement('a');
  // Add Class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link into li
  li.appendChild(link);

  // Finally, append the li to the ul
  taskList.appendChild(li);

  // Once we do that, let's clear the input
  taskInput.value = "";


  e.preventDefault();
}