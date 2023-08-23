// Create a variable with the name bodyElement and use the querySelector method to select the body element.
const bodyElement = document.querySelector("body");

// Create a variable with the name redButton and use the getElementById method to select the button with the id value of red-tile.
const redButton = document.getElementById("red-tile");

/*
  Add an event listener to the redButton variable that will change the background color of the body element to red when clicked.
  Hint: You will need to use the style property of the body element.
*/

redButton.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#ff0000";
});

// Add atleast two more color "tiles" to the page. Each tile should have a unique id.
const blueButton = document.getElementById("blue-tile");

blueButton.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#0000ff";
});

const greenButton = document.getElementById("green-tile");

greenButton.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#00ff00";
});
