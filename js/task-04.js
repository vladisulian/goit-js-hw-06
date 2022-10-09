const counter = document.querySelector("#counter");
const decrementButton = counter.firstElementChild;
const incrementButton = counter.lastElementChild;

let counterValue = document.querySelector("#value");

decrementButton.addEventListener("click", onButtonClickDecree);
incrementButton.addEventListener("click", onButtonClickIncrease);

function onButtonClickIncrease() {
  counterValue.textContent++;
}
function onButtonClickDecree() {
  counterValue.textContent--;
}
