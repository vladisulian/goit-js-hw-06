const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryList = document.querySelector(".gallery");
galleryList.style.display = "flex";
galleryList.style.gap = "35px";

images.forEach(function (images) {
  const galleryLi = document.createElement("li");
  galleryLi.style.listStyleType = "none";

  const imgEl = document.createElement("img");
  imgEl.src = images.url;
  imgEl.alt = images.alt;
  imgEl.style.width = "250px";
  imgEl.style.height = "150px";
  imgEl.style.borderRadius = "45%";

  galleryLi.append(imgEl);
  galleryList.append(galleryLi);
});
console.log(galleryList);
