const inputEl = document.querySelector("#validation-input");
const h = document.createElement("h1");
const p = document.createElement("p");
document.body.append(h);
// p.textContent =
//   "Можно ввести пустой инпут, и он пройдёт валидацию, если пробелов будет больше чем 6. Если меньше - то не засчитывает. Как решить проблему?";
// document.body.append(p);
function inputValidationCheck() {
  if (inputEl.value.length === 6 && !inputEl.value.includes(" ")) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");

    h.textContent = "Input is valid";
    h.style.color = "green";
  } else if (inputEl.value.includes(" ")) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");

    h.textContent = "You need to remove empty spaces!";
    h.style.color = "orange";
  } else if (inputEl.value.length === 0) {
    inputEl.classList.remove("invalid", "valid");
    h.textContent = "";
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");

    h.textContent = "Input is invalid!";
    h.style.color = "red";
  }
}

// validation check
inputEl.addEventListener("blur", inputValidationCheck);
