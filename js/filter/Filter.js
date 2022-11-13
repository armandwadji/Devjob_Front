import { hiddeLoading } from "../animations/ToggleLoading.js";
import displayCards from "../display/DisplayCards.js";
import { getElement, loadMoreEnabled, showJobsSearch } from "../utils.js";

// VARIABLES GLOBAL
let fullTime = 0;
let company = "";
let location = "";

// On pointe vers les éléments html nécéssaires
const checkboxFilter = getElement(".fulltime__container--checkbox");
const titleFilter = getElement(".title-input");
const locationFilter = getElement(".location-input");
const submitBtn = getElement(".fulltime-btn");
const searchBtn = getElement(".form-icons__search");
const cards = getElement(".cards");

// MODAL : NECCESSAIRE LORS DE VALIDATION DU FORMULAIRE
const form = getElement(".homeForm");
const modal = getElement(".modal");

// ******** EVENTS LISTENERS *************
checkboxFilter.addEventListener("click", (e) => {
  fullTime = e.target.checked ? 1 : 0;
});

titleFilter.addEventListener("input", (e) => {
  company = e.target.value;
});

locationFilter.addEventListener("input", (e) => {
  location = e.target.value;
});
// *******************************************

// Evenement onClick du boutton Submit
submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  cards.innerHTML = ""; //Pour évité que le loader ne se centre en dessous du viewport

  // HIDDEN MODAL
  modal.style.visibility = "hidden";
  form.classList.toggle("modal");

  const jobsSubmit = await showJobsSearch(fullTime, company, location);
  displayCards(jobsSubmit);

  loadMoreEnabled(); //On remet le button load more en mode actif

  hiddeLoading(); //loader hidden
});

// Evenement onClick du boutton Search
searchBtn.addEventListener("click", async () => {
  const jobsSearch = await showJobsSearch(fullTime, company);
  displayCards(jobsSearch);

  loadMoreEnabled(); //On remet le button load more en mode actif

  hiddeLoading(); //loader hidden
});
