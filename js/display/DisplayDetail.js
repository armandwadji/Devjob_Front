import { hiddeLoading } from "../animations/ToggleLoading.js";
import { getElement, timestampPost } from "../utils.js";

// On pointe vers les éléments nécéssaires:
const companyDetail = getElement(".company");
const mainDetail = getElement(".main-detail");
const footerDetail = getElement(".footer-detail");

const displayDetail = ({
  apply,
  company,
  contract,
  description,
  location,
  logo,
  logoBackground,
  position,
  postedAt,
  requirements,
  role,
  website,
  id /*A voir ou utilisé */,
}) => {
  // On destructure le content et les items de requirements et roles en les renommant pour les différenciés
  const { content: contentRequirement, items: itemsRequirement } = requirements;
  const { content: contentRole, items: itemsRole } = role;

  // UNORDERED LIST UL ITEMS OF REQUIREMENT
  const ul = itemsRequirement
    .map((item) => {
      return `
              <li>
                <span></span>
                <p>${item}</p>
              </li>
              `;
    })
    .join("");

  // ORDER LIST OL ITEMS OF REQUIREMENT
  const ol = itemsRole
    .map((item, index) => {
      return `
              <li>
                <span>${++index}</span>
                <p>${item}</p>
              </li>
              `;
    })
    .join("");

  // COMPANY SITE
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

  // MAIN COMPONENT
  mainDetail.innerHTML = `
                            <div class="detail detailContainer">
                              <header class="mainHeader">
                                  <div class="mainHeader-infos">
                                      <p class="mainHeader-postAt">${timestampPost(
                                        postedAt
                                      )} ago . <span>${contract} </span></p>
                                      <h3 class="mainHeader-position">${position}</h3>
                                      <h4 class="mainHeader-location">${location} </h4>
                                  </div>
                                  <a href="${apply}" class="mainHeader-btn apply" target="_blank">apply now</a>
                              </header>

                              <!-- Description -->
                              <p class="description">
                                    ${description}
                              </p>

                              <!-- Requirements -->
                              <section class="requirements">
                                <div class="informations">
                                    <h3 class="informations-title">requirements</h3>
                                    <p class="informations-txt">
                                      ${contentRequirement}
                                    </p>
                                    <ul class="informations-list">
                                      ${ul}
                                    </ul>
                                </div>
                              </section>

                              <!-- Roles -->
                              <section className="role">
                                <div class="informations">
                                    <h3 class="informations-title">what you will do</h3>
                                    <p class="informations-txt">
                                      ${contentRole}
                                    </p>
                                    <ol class="informations-list numberList">
                                      ${ol}
                                    </ol>
                                </div>
                              </section>
                            </div>
                          `;

  footerDetail.innerHTML = `
                            <div class="container">
                              <div class="detail detailContainer">
                                <div class="footer-infos">
                                  <h3 class="footer-title">${position}</h3>
                                  <p>so digital inc.</p>
                                </div>
                                <a href="../../index.html" class="footer-btn apply" >apply now</a>
                              </div>
                            </div>
                            `;
  hiddeLoading();
};

export default displayDetail;
