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
  const listItem = document.createElement("li");
  listItem.textContent = ingredients;
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
  // console.log(listItem);
});
