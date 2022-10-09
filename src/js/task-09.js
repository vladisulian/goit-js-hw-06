// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const changeColorButton = document.querySelector(".change-color");
const span = document.querySelector(".change-color");

changeColorButton.addEventListener("click", onChangeColor);

function onChangeColor() {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  span.textContent = document.body.style.backgroundColor;
}
