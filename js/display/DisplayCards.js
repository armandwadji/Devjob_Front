import { hiddeLoading } from "../animations/ToggleLoading.js";
import { getElement, timestampPost } from "../utils.js";

// On Pointe vers la liste des cards
const cards = getElement(".cards");

//Récupèration du template d'une card
const cardTemplate = getElement("#card-template");

// Récupèration du template d'une card empty
const cardIsEmptyTemplate = getElement("#emptySearch-template");

const displayCards = (jobs) => {
  if (jobs.length > 0) {
    jobs
      .sort((a, b) => b.postedAt - a.postedAt)
      .forEach( ( { company, contract, id, location, logo, logoBackground, position, postedAt } ) => {
        
          // Clone Template
          const cloneTemplate = cardTemplate.content.cloneNode( true );

          // Select Card
          const card = cloneTemplate.querySelector( ".card" );

          // Link
          card.querySelector( "a" ).id = id;
          card.querySelector( "a" ).href = `detail.html?id=${id}`;

          // Background Color Logo
          card.querySelector( ".card__logo" ).style = `background-color: ${logoBackground}`;

          // Logo
          card.querySelector( ".card__img" ).src = `https://ecf-dwwm.cefim-formation.org${logo}`;
          card.querySelector( ".card__img" ).alt = `${company}-logo`;

          // PostAt
          card.querySelector( ".card__postAt" ).textContent = `${timestampPost( postedAt )} ago. `;

          // Contract
          const cardContract = document.createElement( "span" );
          cardContract.textContent = contract;
          card.querySelector( ".card__postAt" ).appendChild( cardContract );

          // Position
          card.querySelector( ".card__position" ).textContent = position;

          // Company
          card.querySelector( ".card__company" ).textContent = company;

          // Location
          card.querySelector( ".card__location" ).textContent = location;

          // Add Card in Cards List
          cards.appendChild( card );
        }
      );
  } else {
    const cloneTemplate = cardIsEmptyTemplate.content.cloneNode( true );
    const EmptySearch = cloneTemplate.querySelector( ".emptySearch" );

    cards.appendChild( EmptySearch );
  }

  // Remove Loader
  hiddeLoading();
};

export default displayCards;
