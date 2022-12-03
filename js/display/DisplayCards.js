import { hiddeLoading } from "../animations/ToggleLoading.js";
import { getElement, timestampPost } from "../utils.js";

// On Pointe vers les éléments nécessaires
const cards = getElement(".cards");

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
          // Card
          const card = document.createElement("li");
          card.classList.add("card");

          // CardLink
          const cardLink = document.createElement("a");
          cardLink.id = id;
          cardLink.href = `detail.html?id=${id}`;

          // CardLogo
          const cardLogo = document.createElement("div");
          cardLogo.classList.add("card__logo");
          cardLogo.style = `background-color: ${logoBackground}`;

          // ImageLogo
          const cardImg = document.createElement("img");
          cardImg.classList.add("card__img");
          cardImg.src = `https://ecf-dwwm.cefim-formation.org${logo}`;

          cardImg.alt = `${company}-logo`;
          cardLogo.appendChild(cardImg);

          // PostAt
          const cardPostAt = document.createElement("p");
          cardPostAt.classList.add("card__postAt");
          cardPostAt.textContent = `${timestampPost(postedAt)} ago .`;

          // Contract
          const cardContract = document.createElement("span");
          cardContract.textContent = contract;
          cardPostAt.appendChild(cardContract);

          // Position
          const cardPosition = document.createElement("h2");
          cardPosition.classList.add("card__position");
          cardPosition.textContent = position;

          // Company
          const cardCompany = document.createElement("p");
          cardCompany.classList.add("card__company");
          cardCompany.textContent = company;

          // Location
          const cardLocation = document.createElement("h3");
          cardLocation.classList.add("card__location");
          cardLocation.textContent = location;

          cardLink.append(
            cardLogo,
            cardPostAt,
            cardPosition,
            cardCompany,
            cardLocation
          );

          card.appendChild(cardLink); //
          cards.appendChild(card);
        }
      );
  } else {
    // Empty Search
    const emptySearch = document.createElement("li");
    emptySearch.className = "emptySearch";

    // Empty Search Img
    const emptySearchImg = document.createElement("img");
    emptySearchImg.className = "emptySearch-img";
    emptySearchImg.src = "../../assets/icon-search.svg";
    emptySearchImg.alt = "empty serch logo";

    // Empty Search Message
    const emptySearchMessage = document.createElement("h3");
    emptySearchMessage.className = "emptySearch-message";
    emptySearchMessage.textContent = `no ads available`;

    // Family Ties
    emptySearch.append(emptySearchImg, emptySearchMessage); //
    cards.appendChild(emptySearch);
  }

  // Remove Loader
  hiddeLoading();
};

export default displayCards;
