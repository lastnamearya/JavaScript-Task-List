// document.getElementById();

console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change Styling
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
// document.getElementById('task-title').style.display = "none";

// change content
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = "<span style='color:red'>Task List</span>";

 