import { hiddeprogress, showprogress } from "../animations/ToggleLoading.js";
import displayCards from "../display/DisplayCards.js";
import { getElement, getStorageItem, loadMoreDisabled, setStorageItem } from "../utils.js";
import fetchData from "./FetchData.js";

// On pointe vers les éléments nécessaires
const loadMoreBtn = getElement(".load-more");

loadMoreBtn.addEventListener( "click", async () => {
  showprogress(); // Progress loader visible

  const urlPaginaton = getStorageItem("url"); //url pour la pagination

  let jobs = getStorageItem("jobs"); // Liste des jobs stockés dans le localStorage

  let offset = jobs.length; // Index nécéssaire pour la pagination

  const newCards = await fetchData(`${urlPaginaton}?limit=3&offset=${offset}`);

  const { jobs: newJobs, total } = newCards;
  console.log(newJobs);
  if ( newJobs.length > 0) {
    jobs = [...jobs, ...newJobs];
    setStorageItem("jobs", jobs);
    displayCards( newJobs ); //On actualise l'affichage des cards
    
  } else {
    loadMoreDisabled(); //Méthode qui disabled le button load more
  }

  hiddeprogress(); // Progress loader hidden
});
