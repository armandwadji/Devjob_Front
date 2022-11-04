import { hiddeLoading, showLoading } from "../animations/ToggleLoading.js";
import displayCards from "../display/DisplayCards.js";
import fetchData from "../requests/FetchData.js";
import {
  getElement,
  loadMoreEnabled,
  setStorageItem,
  URLCARDS,
} from "../utils.js";

// VARIABLES GLOBAL
let checked = 0;
let company = "";
let location = "";

// On pointe vers les éléments html nécéssaires
const checkboxFilter = getElement(".fulltime__container--checkbox");
const titleFilter = getElement(".title-input");
const locationFilter = getElement(".location-input");
const submitBtn = getElement(".fulltime-btn");
const cards = getElement(".cards");

// MODAL
const form = getElement(".homeForm");
const modal = getElement(".modal");

// ******** EVENEMENTS LISTENERS *************
checkboxFilter.addEventListener("click", (e) => {
  checked = e.target.checked ? 1 : 0;
});

titleFilter.addEventListener("input", (e) => {
  company = e.target.value;
});

locationFilter.addEventListener("input", (e) => {
  location = e.target.value;
});
// *******************************************

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  cards.innerHTML = ""; //Pour évité que le loader ne se centre en dessous du viewport

  // HIDDEN MODAL
  modal.style.visibility = "hidden";
  form.classList.toggle("modal");

  let urlSearch = null;
  let jobs = [];

  showLoading(); //loader visible

  if (checked || company || location) {
    urlSearch = `${URLCARDS}/search?text=${company}&fulltime=${checked}&location=${location}`;
    const cards = await fetchData(urlSearch);
    jobs = cards.jobs;
  } else {
    urlSearch = URLCARDS;
    const cards = await fetchData(urlSearch);
    jobs = cards.jobs;
  }

  displayCards(jobs);

  // On actualise l'url et la liste des jobs en localStorage
  setStorageItem("url", urlSearch);
  setStorageItem("jobs", jobs);

  loadMoreEnabled(); //On remet le button load more en mode actif

  hiddeLoading(); //loader hidden
});
