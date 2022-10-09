const form = document.querySelector("#name-input");
const helloUser = document.querySelector("#name-output");

form.addEventListener("input", (event) => {
  if (form.value === "") {
    helloUser.textContent = "Anonimous";
  } else {
    helloUser.textContent = form.value;
  }
});
