import "../../js/animations/DarkMode.js";
import { getElement } from "../utils.js";

const counterDisplay = getElement("body h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.className = "bubble";
  document.body.appendChild(bubble);

  // Taille aléatoire de la bulle
  const size = Math.random() * 200 + 100;

  bubble.style.height = `${size}px`;
  bubble.style.width = `${size}px`;

  // Position aléatoire de départ de la bulle
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  // +1 / -1
  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  // Direction aleatoire de la bulle
  bubble.style.setProperty("--left", `${Math.random() * 100 * plusMinus}%`);

  bubble.addEventListener("click", () => {
    counter += 1;
    counterDisplay.textContent = `${counter} ${counter === 1 ? "bulle" : "bulles"}`;
    counterDisplay.style = "font-size: 6rem";

    bubble.remove();
  });

  setTimeout(() => bubble.remove(), 8000);
};

setInterval(bubbleMaker, 1000);
