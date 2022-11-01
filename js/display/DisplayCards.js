import { getElement, timestampPost } from "../utils.js";

const cards = getElement(".cards");

const displayCards = (jobs) => {
  const cardList = jobs
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

  cards.innerHTML = cardList;
};

export default displayCards;
