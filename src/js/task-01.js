const item = document.querySelectorAll("#categories .item").length; // or I can use just .item
console.log("Number of categories: " + item);

const items = document.querySelectorAll(".item");
Array.prototype.forEach.call(items, (element) => {
  const title = element.querySelector("h2").innerHTML;
  const itemsLength = element.querySelectorAll("li").length;
  console.log(` Category: ${title}. \n Elements: ${itemsLength}.`);
});
