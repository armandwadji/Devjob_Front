import { getElement, timestampPost } from "../utils.js";

// On pointe vers les éléments nécéssaires:
const companyDetail = getElement(".company");
const mainHeader = getElement(".mainHeader");
const desc = getElement(".description");
const requirement = getElement(".requirements");
console.log(desc);

const displayDetail = (data) => {
  const {
    apply,
    company,
    contract,
    description,
    id,
    location,
    logo,
    logoBackground,
    position,
    postedAt,
    requirements,
    role,
    website,
  } = data;
  console.log(data);

  companyDetail.innerHTML = `
    
        <figure class="company-logo" style="background-color: ${logoBackground}">
          <img src="https://ecf-dwwm.cefim-formation.org${logo}" alt="${company}-logo" class="company-img" />
        </figure>

        <div class="company-infos">
          <div class="company-site">
            <h3 class="company-site__title">${company}</h3>
            <p class="company-url">${website}</p>
          </div>

          <a href="${website}" class="company-btn" target="_blank">company site</a>
        </div>
    
    
    `;

  mainHeader.innerHTML = `
        <div class="mainHeader-infos">
            <p class="mainHeader-postAt">${timestampPost(
              postedAt
            )} ago . <span>${contract} </span></p>
            <h3 class="mainHeader-position">${position}</h3>
            <h4 class="mainHeader-location">${location} </h4>
        </div>
        <a href="${apply}" class="mainHeader-btn apply" target="_blank">apply now</a>
    
    `;

  desc.textContent = `${description}`;
};

export default displayDetail;
