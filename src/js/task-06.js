const inputEl = document.querySelector("#validation-input");

function inputValidationCheck() {
  if (inputEl.value.length >= 6) {
    inputEl.classList.add("valid");
    console.log("Input is valid");
  } else {
    inputEl.classList.add("invalid");
    console.log("Input is invalid");
  }
}

// validation check
inputEl.addEventListener("blur", inputValidationCheck);
