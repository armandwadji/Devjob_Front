import "../animations/DarkMode.js";
import displayDetail from "../display/Displaydetail.js";
import fetchCards from "../requests/FetchCards.js";
import { urlCard, idrecuparation } from "../utils.js";

const id = await idrecuparation();
const cardDetailUrl = `${urlCard}${id}`;

window.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchCards(cardDetailUrl);
  displayDetail(data);
});
