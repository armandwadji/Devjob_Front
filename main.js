// Global Imports
import "./js/animations/DarkMode.js";
import "./js/animations/Modal.js";
import "./js/filter/Filter.js";
import "./js/requests/LoadMore.js";
import "./js/animations/ScrollToTop.js";

// specific imports
import fetchData from "./js/requests/FetchData.js";
import { setStorageItem, URLCARDS } from "./js/utils.js";
import displayCards from "./js/display/DisplayCards.js";

window.addEventListener("DOMContentLoaded", async () => {
  const cards = await fetchData(URLCARDS);
  const { jobs } = await cards;
  displayCards(jobs);
  setStorageItem("url", URLCARDS);
  setStorageItem("jobs", jobs);
});
