// document.querySelector('.clear-tasks').addEventListener('click', (e) => {
//   console.log('Hello World');

//   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //  console.log('Clicked');

  let val;

  val = e;

  // It will log where we clicked, our click accurate location on the screen, target where we clicked in our document and everything else about the event happened.

  val = e.target;
  // There's no id by default so we'll get a blank value 
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = "Hello";

  // Event Type, we can change event type from click to mouseover while adding Event Listener
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
