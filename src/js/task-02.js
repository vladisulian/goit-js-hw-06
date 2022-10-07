const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// marked #ingredients
const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

ingredients.forEach(function (ingredients) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredients;
  listItem.classList.add("item");
  console.log(listItem);
  ingredientsList.appendChild(listItem);
});
