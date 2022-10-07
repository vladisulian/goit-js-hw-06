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
// console.log(ingredientsList);

ingredients.forEach(function (ingredients) {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = ingredients;
  listItemEl.classList.add("item");
  ingredientsList.appendChild(listItemEl);
  // console.log(listItem);
});
