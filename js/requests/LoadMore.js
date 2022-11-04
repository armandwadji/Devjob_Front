import { hiddeprogress, showprogress } from "../animations/ToggleLoading.js";
import displayCards from "../display/DisplayCards.js";
import {
  getElement,
  getStorageItem,
  loadMoreDisabled,
  setStorageItem,
} from "../utils.js";
import fetchCards from "./FetchCards.js";

const loadMoreBtn = getElement(".load-more");

loadMoreBtn.addEventListener("click", async () => {
  const urlPaginaton = getStorageItem("url"); //url pour la pagination

  let jobs = getStorageItem("jobs"); // Liste des jobs stockés dans le localStorage

  let index = jobs.length; // Index nécéssaire pour la pagination

  showprogress(); // Progress loader visible

  const newCards = await fetchCards(`${urlPaginaton}?limit=3&offset=${index}`);
  index += 3;

  const { jobs: newJobs, total } = newCards;

  if (jobs.length < total) {
    jobs = [...jobs, ...newJobs];
    setStorageItem("jobs", jobs);
  } else {
    loadMoreDisabled(); //Méthode qui disabled le button load more
  }

  displayCards(jobs);

  hiddeprogress(); // Progress loader hidden
});
