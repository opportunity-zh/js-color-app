// Erstelle eine Variable mit dem Namen bodyElement und verwende die querySelector-Methode, um das body-Element (body) auszuwählen.
const bodyElement = document.querySelector("body");

// Erstelle eine Variable mit dem Namen redButton und verwende die getElementById-Methode, um die Schaltfläche mit dem id-Wert von red-tile auszuwählen.
const redButton = document.getElementById("red-tile");

/*
  Add an event listener to the redButton variable that will change the background color of the body element to red when clicked.
  Hint: You will need to use the style property of the body element.
*/

/*
  Füge dem redButton-Element einen Event-Listener (click) hinzu, der die Hintergrundfarbe des body-Elements beim Klicken auf rot ändert.
  Hinweis: Sie müssen die style-Eigenschaft (style) des body-Elements verwenden. 
*/
redButton.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#ff0000";
});

// Add atleast two more color "tiles" to the page. Each tile should have a unique id.

// Füge der Seite mindestens zwei weitere Farb-Kacheln hinzu. Jede Kachel sollte eine eindeutige ID haben.
const blueButton = document.getElementById("blue-tile");

blueButton.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#0000ff";
});

const greenButton = document.getElementById("green-tile");

greenButton.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#00ff00";
});
