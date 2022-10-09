const controlsContainer = document.querySelector("#controls");
controlsContainer.style.marginBottom = "5px";

const newDivs = document.querySelector("#boxes");
newDivs.style.display = "flex";
newDivs.style.gap = "3px";
newDivs.style.flexWrap = "wrap";

const createBtn = controlsContainer.children[1];
const destroyBtn = controlsContainer.children[2];
const input = controlsContainer.children[0];

createBtn.addEventListener("click", onCreateDivs);
destroyBtn.addEventListener("click", onDeleteDivs);

function onCreateDivs() {
  for (let i = 0; i < input.value; i += 1) {
    const div = document.createElement("div");
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;

    // if (i > 2) {
    //   div.style.width = "10px";
    // } else {
    //   console.log("?");
    // }

    newDivs.append(div);
  }
}
function onDeleteDivs() {
  newDivs.innerHTML = "";
}
