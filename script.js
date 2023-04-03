const container = document.getElementById("grid-container");
let gridItems = document.querySelectorAll(".grid-items");
const normal = document.getElementById("normal");
const eraserButton = document.getElementById("eraser");
const rainbow = document.getElementById("rainbow");
const clear = document.getElementById("clear");
const sliderBar = document.getElementById("slider");
let progressBar = document.getElementById("progress-bar");
let rangeValue = Number(document.querySelector(".range-value").textContent);

const createGrid = () => {
  for (let i = 0; i < 100; i++) {
    const gridSpace = document.createElement("div");
    gridSpace.classList.add("grid-items");
    container.appendChild(gridSpace);
    gridItems = document.querySelectorAll(".grid-items");
  }
};
createGrid();

const normalMode = () => {
  const black = (e) => {
    e.target.style.backgroundColor = "black";
  };
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("mouseenter", black);
  }
};

normal.addEventListener("click", normalMode);

const eraser = () => {
  const white = (e) => {
    e.target.style.backgroundColor = "white";
  };

  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("mouseenter", white);
  }
};
eraserButton.addEventListener("click", eraser);

//function for generating a random number
const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// function for rainbow pen
const rainbowPen = () => {
  const rainbowGeneration = (e) => {
    let randNum = rand(0, 256);
    e.target.style.backgroundColor = `hsl(${randNum}, 45%, 50%)`;
  };

  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("mouseenter", rainbowGeneration);
  }
};
rainbow.addEventListener("click", rainbowPen);

// function for clearing the board
clear.addEventListener("click", function () {
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.backgroundColor = "white";
  }
});

// slider function

const displaySliderValue = (value) => {
  let gridLabel = document.querySelectorAll(".range-value");
  for (let i = 0; i < gridLabel.length; i++) gridLabel[i].textContent = value;
};
