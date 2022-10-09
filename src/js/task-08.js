// form el
const form = document.querySelector(".login-form");
const email = form[0];
const pass = form[1];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (email.value === "" || pass.value === "") {
    alert("All fields must be filled");
  } else {
    // formData.forEach((value, name) => {
    //   const formData = new FormData(event.currentTarget);
    //   console.log("onFormSubmit -> name", name);
    //   console.log("onFormSubmit -> value", value);
    // });
    const formElements = event.currentTarget.elements;
    const mailValue = formElements.email.value;
    const passwordValue = formElements.password.value;

    console.log("Mail:", mailValue, "\n", "Password:", passwordValue);
  }

  form.reset();
}
