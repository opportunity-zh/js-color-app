// Also create a variable that gets the body element. (querySelector)
const bodyElement = document.querySelector("body");

const redButton = document.getElementById("red-tile");

redButton.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#ff0000";
});

const blueButton = document.getElementById("blue-tile");

blueButton.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#0000ff";
});

const greenButton = document.getElementById("green-tile");

greenButton.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#00ff00";
});
