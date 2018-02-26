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
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task Event
  form.addEventListener('submit', addTask);
  // Remove task Event
  taskList.addEventListener('click', removeTask);
  // Clear Task Events
  clearBtn.addEventListener('click', clearTasks);
  // Filter Tasks events
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LS
function getTasks(){
  let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    } 

    tasks.forEach(function(task){
      const li = document.createElement('li');
      li.className = "collection-item"; 
      li.appendChild(document.createTextNode(task));

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
    });
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

  // Store in Local Storage
  storeTaskInLocalStorage(taskInput.value);

  // Finally, append the li to the ul
  taskList.appendChild(li);

  // Once we do that, let's clear the input
  taskInput.value = "";

  e.preventDefault();
}

// Store Task in Local Storage
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [ ];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Remove Task
function removeTask(e){
  // console.log(e.target);
  if(e.target.parentElement.classList.contains('delete-item')){
    // console.log(e.target);
    if(confirm('Are you Sure?')){
      e.target.parentElement.parentElement.remove();

      // Remove from LocalStorage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove Tasks from Local Storage
function removeTaskFromLocalStorage(taskItem){
  // console.log(taskItem);
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [ ];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent  === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Task
function clearTasks() {
  // First way to do this
  taskList.innerHTML = " ";

  // Second Way i.e Faster Way
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from Local Storage
  clearTasksFromLocalStorage();
}

// Clear Tasks from Local Storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}


// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase(); 

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none'; 
    }
  });
}
