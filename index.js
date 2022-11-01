// Global Imports
import "./js/animations/DarkMode.js";
import "./js/animations/Modal.js";

// specific imports
import { urlCards } from "./js/utils.js";
import fetchCards from "./js/requests/FetchCards.js";
import displayCards from "./js/display/DisplayCards.js";

window.addEventListener("DOMContentLoaded", async () => {
  const cards = await fetchCards(urlCards);
  const { jobs } = cards;
  displayCards(jobs);
});
