const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ? marked #ingredients through querySelector
const ingredientsList = document.querySelector("#ingredients");

ingredientsList.insertAdjacentHTML(
  "beforeend",
  ingredients.map((ingr) => `<li class='item'>${ingr}</li>`).join("")
);

// ingredients.forEach(function (ingredients) {
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = ingredients;
//   listItemEl.classList.add("item");
//   ingredientsList.appendChild(listItemEl);
//   // console.log(listItem);
// });
