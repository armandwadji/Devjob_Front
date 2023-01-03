import { hiddeLoading } from "../animations/ToggleLoading.js";
import { getElement, timestampPost } from "../utils.js";

// ********************* On pointe vers les éléments html nécéssaires: *********************

// *********************
// HEADER COMPANY 
const logoCompany = getElement(".company-logo");
const imgCompany = getElement(".company-img");
const nameCompany = getElement(".company-site__title");
const webSiteCompany = getElement(".company-url");
const urlBtnCompany = getElement(".company-btn");

// MAIN COMPONENT
const postAtCompany = getElement(".mainHeader-postAt");
const positionCompany = getElement(".mainHeader-position");
const locationCompany = getElement(".mainHeader-location");
const mainBtnCompany = getElement(".mainHeader-btn");
const descriptionCompany = getElement(".description");
const requirementsDefCompany = getElement(".requirements .informations-txt");
const requirementsListCompany = getElement(".requirements .informations-list");
const rolesDefCompany = getElement(".role .informations-txt");
const rolesListCompany = getElement(".role .informations-list");

// FOOTER COMPANY
const companyPosition = getElement( ".footer-title" );
const companyName = getElement( '.footer-infos p' );

const displayDetail = ( { apply, company, contract, description, location, logo, logoBackground, position, postedAt, requirements, role, website } ) => {
  
  // On destructure le content et les items de requirements et roles en les renommants pour les différenciés
  const { content: contentRequirement, items: itemsRequirement } = requirements;
  const { content: contentRole, items: itemsRole } = role;

  // Company Header
  logoCompany.style = `background-color: ${logoBackground}`;
  imgCompany.src = `https://ecf-dwwm.cefim-formation.org${logo}`;
  imgCompany.alt = `${company}-logo`;
  nameCompany.textContent = company;
  webSiteCompany.textContent = `${company}.com`;
  urlBtnCompany.href = website;

  // postAtCompany
  postAtCompany.textContent = `${timestampPost(postedAt)} ago .`;
  const Contract = document.createElement("span");
  Contract.textContent = contract;
  postAtCompany.appendChild(Contract);

  // Position
  positionCompany.textContent = position;
  // location
  locationCompany.textContent = location;
  // Company Site
  mainBtnCompany.href = apply;
  // Description
  descriptionCompany.textContent = description;
  // Requirement Definition
  requirementsDefCompany.textContent = contentRequirement;
  // Roles Definition
  rolesDefCompany.textContent = contentRole;

  // Requirement List
  itemsRequirement.forEach((item) => {
    const list = document.createElement("li");
    const span = document.createElement("span");
    const p = document.createElement("p");

    p.textContent = item;

    list.append(span, p);
    requirementsListCompany.appendChild(list);
  });

  // Roles List
  itemsRole.forEach((item, index) => {
    const list = document.createElement("li");
    const span = document.createElement("span");
    const p = document.createElement("p");

    span.textContent = ++index;
    p.textContent = item;

    list.append(span, p);
    rolesListCompany.appendChild(list);
  });

  // Position Company
  companyPosition.textContent = position;

  // name Company footer
  companyName.textContent = `${company}${company.at( -1 ) === '.' ? "" : '.'}`;
  
  // Remove Loader
  hiddeLoading();
};

export default displayDetail;
