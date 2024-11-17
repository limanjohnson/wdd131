const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
    console.log('Hello');
  console.log(event)
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);

// const log = document.querySelector("#log");

// document.addEventListener("keydown", logKey);

// function logKey(e) {
  // how do we know which key was pressed?
//   console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
// }