// Global Imports
import "./js/animations/DarkMode.js";
import "./js/animations/Modal.js";
import "./js/filter/Filter.js";
import "./js/requests/LoadMore.js";

// specific imports
import fetchCards from "./js/requests/FetchCards.js";
import { setStorageItem, URLCARDS } from "./js/utils.js";
import displayCards from "./js/display/DisplayCards.js";

window.addEventListener("DOMContentLoaded", async () => {
  const cards = await fetchCards(URLCARDS);
  const { jobs } = await cards;
  displayCards(jobs);
  setStorageItem("url", URLCARDS);
  setStorageItem("jobs", jobs);
});
