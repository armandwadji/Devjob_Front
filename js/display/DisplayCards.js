import { hiddeLoading } from "../animations/ToggleLoading.js";
import { getElement, timestampPost } from "../utils.js";

const cards = getElement(".cards");

const displayCards = (jobs) => {
  let cardList = [];

  if (jobs.length > 0) {
    cardList = jobs
      .sort((a, b) => b.postedAt - a.postedAt)
      .map(
        ({
          company,
          contract,
          id,
          location,
          logo,
          logoBackground,
          position,
          postedAt,
        }) => {
          return `
            <li class="card">
                <a href="detail.html?id=${id}" id="${id}" >
                <div class="card__logo" style="background-color: ${logoBackground}">
                    <img class="card__img" src="https://ecf-dwwm.cefim-formation.org${logo}" alt="${company}-logo" />
                </div>
                <p class="card__postAt">${timestampPost(
                  postedAt
                )} ago . <span>${contract}</span></p>
                <h2 class="card__position">${position}</h2>
                <p class="card__company">${company}</p>
                <h3 class="card__location">${location}</h3>
                </a>
            </li>
          `;
        }
      )
      .join("");
  } else {
    cardList = `  <li class="emptySearch">
                    <img class="emptySearch-img" src="../../assets/icon-search.svg" alt="empty serch logo" />
                    <h3 class="emptySearch-message">Aucunes annonces disponibles</h3> 
                  </li>
                `;
  }

  cards.innerHTML = cardList;
  hiddeLoading();
};

export default displayCards;
