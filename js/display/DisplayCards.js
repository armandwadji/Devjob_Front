import { hiddeLoading } from "../animations/ToggleLoading.js";
import { getElement, timestampPost } from "../utils.js";

// On Pointe vers les éléments nécessaires
const cards = getElement(".cards");

const displayCards = (jobs) => {
  if (jobs.length > 0) {
    jobs.forEach(
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
        card.appendChild(cardLink);

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
        cardLink.appendChild(cardLogo);

        // PostAt
        const cardPostAt = document.createElement("p");
        cardPostAt.classList.add("card__postAt");
        cardPostAt.textContent = `${timestampPost(postedAt)} ago .`;

        // Contract
        const cardContract = document.createElement("span");
        cardContract.textContent = contract;
        cardPostAt.appendChild(cardContract);
        cardLink.appendChild(cardPostAt);

        // Position
        const cardPosition = document.createElement("h2");
        cardPosition.classList.add("card__position");
        cardPosition.textContent = position;
        cardLink.appendChild(cardPosition);

        // Company
        const cardCompany = document.createElement("p");
        cardCompany.classList.add("card__company");
        cardCompany.textContent = company;
        cardLink.appendChild(cardCompany);

        // Location
        const cardLocation = document.createElement("h3");
        cardLocation.classList.add("card__location");
        cardLocation.textContent = location;
        cardLink.appendChild(cardLocation);

        cards.appendChild(card);
      }
    );
  } else {
    // Empty Search
    const emptySearch = document.createElement("li");
    emptySearch.classList.add("emptySearch");

    // Empty Search Img
    const emptySearchImg = document.createElement("img");
    emptySearchImg.classList.add("emptySearch-img");
    emptySearchImg.setAttribute("src", "../../assets/icon-search.svg");
    emptySearchImg.setAttribute("alt", "empty serch logo");
    emptySearch.appendChild(emptySearchImg);

    // Empty Search Message
    const emptySearchMessage = document.createElement("h3");
    emptySearchMessage.classList.add("emptySearch-message");
    emptySearchMessage.textContent = `no ads available`;
    emptySearch.appendChild(emptySearchMessage);

    cards.appendChild(emptySearch);
  }

  // Remove Loader
  hiddeLoading();
};

export default displayCards;
