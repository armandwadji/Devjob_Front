import displayCards from "../display/DisplayCards.js";
import { getElement, urlCards } from "../utils.js";
import fetchCards from "./FetchCards.js";

const loadMoreBtn = getElement(".load-more");
const loadMore = async () => {
  const cards = await fetchCards(urlCards);
  let { jobs } = cards;
  let index = jobs.length - 3;

  loadMoreBtn.addEventListener("click", async () => {
    const newUrl = `${urlCards}?offset=${(index += 3)}&limit=3`;
    const newCards = await fetchCards(newUrl);
    const { jobs: newJobs } = newCards;

    if (newJobs.length < 3) {
      loadMoreBtn.textContent = "plus de jobs disponible";
      loadMoreBtn.setAttribute("disabled", true);
      loadMoreBtn.style = "background-color: red ";
    } else {
      jobs = [...jobs, ...newJobs];
    }

    displayCards(jobs);
  });
  return jobs;
};

export default loadMore;
