const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear Input
taskInput.value = ' ';

// // form.addEventListener('submit', runEvent);

// // Keydown event
// taskInput.addEventListener('keydown', runEvent);

// // Keyup event
// taskInput.addEventListener('keyup', runEvent);

// // Keypress event
// taskInput.addEventListener('keypress', runEvent);

// // Focus
// taskInput.addEventListener('focus', runEvent);

// // Blur
// taskInput.addEventListener('blur', runEvent);

// // Cut
// taskInput.addEventListener('cut', runEvent);

// // Paste
// taskInput.addEventListener('paste', runEvent);

// // Input Event, cut and paste events are sub-events of input they fall into the input category
// taskInput.addEventListener('input', runEvent);


function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  // console.log(e.target.value);

  // heading.innerText = e.target.value;

  // // Get Input Value
  // console.log(taskInput.value);

  // e.preventDefault();
}