import "../animations/DarkMode.js";
import displayDetail from "../display/DisplayDetail.js";
import fetchCards from "../requests/FetchData.js";
import { idrecuparation, URLCARD } from "../utils.js";

const id = await idrecuparation();
const cardDetailUrl = `${URLCARD}/${id}`;

window.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchCards(cardDetailUrl);
  displayDetail(data);
});
