// Create an variable that gets all the buttons on the page. (querySelectorAll)
const colorButtons = document.querySelectorAll(".color-button");

// Also create a variable that gets the body element. (querySelector)
const bodyElement = document.querySelector("body");

// Now we need to loop through every button and add an event listener to it. (forEach)
// colorButtons.forEach((button) => {
//   // Inside the event listener, we need to get the id of the button that was clicked. (addEventListener)
//   button.addEventListener("click", () => {
//     // We get the id of the button by using button.id, assign it to a variable called color.
//     const color = button.id;

//     /*
//       Now we need to change the background color of the body to the color that was clicked.
//       We can do this by changing the style.backgroundColor property of the body.
//     */

//     bodyElement.style.backgroundColor = color;
//   });
// });

const redButton = document.getElementById("red");

redButton.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#ff0000";
});

const blueButton = document.getElementById("blue");

blueButton.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#0000ff";
});

const greenButton = document.getElementById("green");

greenButton.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#00ff00";
});
