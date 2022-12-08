import { hiddeLoading } from "../animations/ToggleLoading.js";
import displayCards from "../display/DisplayCards.js";
import { getElement, loadMoreEnabled, showJobsSearch } from "../utils.js";

// On pointe vers les éléments html nécéssaires
const form = getElement(".homeForm");
const searchBtn = getElement(".form-icons__search");
const cards = getElement(".cards");

// MODAL : NECCESSAIRE LORS DE VALIDATION DU FORMULAIRE
const modal = getElement(".modal");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  cards.innerHTML = ""; //Pour évité que le loader ne se centre en dessous du viewport et réinitialisé la liste des cards

  // HIDDEN MODAL
  modal.style.visibility = "hidden";
  form.classList.toggle("modal");

  const jobsSubmit = await showJobsSearch(
    form.fullTimeFilter.checked ? 1 : 0,
    form.companyFilter.value,
    form.locationFilter.value
  );
  displayCards(jobsSubmit);

  loadMoreEnabled(); //On remet le button load more en mode actif

  hiddeLoading(); //loader hidden
});

// Evenement onClick de l'icone Search en résolution mobile
searchBtn.addEventListener("click", async () => {
  cards.innerHTML = "";

  const jobsSearch = await showJobsSearch(
    form.fullTimeFilter.checked ? 1 : 0,
    form.companyFilter.value
  );

  displayCards(jobsSearch);

  loadMoreEnabled(); //On remet le button load more en mode actif

  hiddeLoading(); //loader hidden
});
