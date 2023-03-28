const container = document.getElementById("grid-container");
const button = document.querySelector("button");
const eraser = document.getElementById("eraser");
const rainbow = document.getElementById("rainbow");
const clear = document.getElementById("clear");

clear.addEventListener("click", function () {
  console.log(`eraser clicked`);
});

const createGrid = () => {
  for (let i = 0; i < 400; i++) {
    const gridSpace = document.createElement("div");
    gridSpace.classList.add("grid-items");
    container.appendChild(gridSpace);
    gridItems = document.querySelectorAll(".grid-items");
  }
};
createGrid();

//function for generating a random number
const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const cursorDrag = (e) => {
  let randNum = rand(0, 256);
  e.target.style.backgroundColor = `hsl(${randNum}, 45%, 50%)`;
};

const eventsTracker = () => {
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("mouseenter", cursorDrag);
  }
};

eventsTracker();
