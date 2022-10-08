const inputEl = document.querySelector("#validation-input");
const h = document.createElement("h1");
const p = document.createElement("p");
p.textContent =
  "Можно ввести пустой инпут, и он пройдёт валидацию, если пробелов будет больше чем 6. Если меньше - то не засчитывает. Как решить проблему?";
document.body.append(p);
function inputValidationCheck() {
  if (inputEl.value.length >= 6) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");

    h.textContent = "Input is valid";
    h.style.color = "green";
    document.body.append(h);
  } else if (inputEl.value.includes(" ")) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");

    h.textContent = "Нужно убрать пробелы";
    h.style.color = "orange";
    document.body.append(h);
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");

    h.textContent = "Input is invalid!";
    h.style.color = "red";
    document.body.append(h);
  }
}

// validation check
inputEl.addEventListener("blur", inputValidationCheck);
