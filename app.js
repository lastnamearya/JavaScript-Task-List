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

  e.preventDefault();
}