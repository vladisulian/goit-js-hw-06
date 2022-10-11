const button = {
  decrementButton: document.querySelector("[data-action='decrement']"),
  incrementButton: document.querySelector("[data-action='increment']"),
  span: document.querySelector("#value"),
};

button.span.value = 0;
let counterValue = 0;

function onButtonClickIncrease() {
  counterValue += 1;
  button.span.textContent = counterValue;
}
function onButtonClickDecree() {
  counterValue--;
  button.span.textContent = counterValue;
}
button.decrementButton.addEventListener("click", onButtonClickDecree);
button.incrementButton.addEventListener("click", onButtonClickIncrease);
