import { hiddeLoading } from "../animations/ToggleLoading.js";
import { getElement, timestampPost } from "../utils.js";

// On Pointe vers la liste des cards
const Cards = getElement(".cards");

//Récupèration du template d'une card
const cardTemplate = getElement("#card-template");

// Récupèration du template d'une card empty
const cardIsEmptyTemplate = getElement("#emptySearch-template");

const displayCards = (jobs) => {
  if (jobs.length > 0) {
    jobs
      .sort((a, b) => b.postedAt - a.postedAt)
      .forEach(
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
          // Clone Template
          const cloneTemplate = document.importNode(cardTemplate.content, true);

          // Select Card
          const Card = cloneTemplate.querySelector(".card");

          // Link
          Card.querySelector("a").id = id;
          Card.querySelector("a").href = `detail.html?id=${id}`;

          // Background Color Logo
          Card.querySelector(
            ".card__logo"
          ).style = `background-color: ${logoBackground}`;

          // Logo
          Card.querySelector(
            ".card__img"
          ).src = `https://ecf-dwwm.cefim-formation.org${logo}`;
          Card.querySelector(".card__img").alt = `${company}-logo`;

          // PostAt
          Card.querySelector(".card__postAt").textContent = `${timestampPost(
            postedAt
          )} ago. `;

          // Contract
          const CardContract = document.createElement("span");
          CardContract.textContent = contract;
          Card.querySelector(".card__postAt").appendChild(CardContract);

          // Position
          Card.querySelector(".card__position").textContent = position;

          // Company
          Card.querySelector(".card__company").textContent = company;

          // Location
          Card.querySelector(".card__location").textContent = location;

          // Add Card in Cards List
          Cards.appendChild(Card);
        }
      );
  } else {
    const cloneTemplate = document.importNode(
      cardIsEmptyTemplate.content,
      true
    );

    const EmptySearch = cloneTemplate.querySelector(".emptySearch");

    Cards.appendChild(EmptySearch);
    console.log(EmptySearch);
  }

  // Remove Loader
  hiddeLoading();
};

export default displayCards;
