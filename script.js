const button = document.querySelector("button");
const container = document.getElementById("container");

const divCreator = () => {
  for (let i = 1; i <= 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("div");
    container.appendChild(newDiv);
    newDiv.innerText = "I'm a newly created div";
  }
};

button.addEventListener("click", divCreator);
