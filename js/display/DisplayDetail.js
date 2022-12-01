import { hiddeLoading } from "../animations/ToggleLoading.js";
import { getElement, timestampPost } from "../utils.js";

// ********************* On pointe vers les éléments html nécéssaires: *********************

// *********************
// COMPANY SITE
const companyLogo = getElement(".company-logo");
const companyImg = getElement(".company-img");
const companyName = getElement(".company-site__title");
const companyWebsite = getElement(".company-url");
const companyUrlBtn = getElement(".company-btn");

// MAIN COMPONENT
const PostAt = getElement(".mainHeader-postAt");
const Position = getElement(".mainHeader-position");
const Location = getElement(".mainHeader-location");
const MainBtn = getElement(".mainHeader-btn");
const Description = getElement(".description");
const RequirementsDef = getElement(".requirements .informations-txt");
const RequirementsList = getElement(".requirements .informations-list");
const RolesDef = getElement(".role .informations-txt");
const RolesList = getElement(".role .informations-list");

// POSITION SITE
const companyPosition = getElement(".footer-title");

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
}) => {
  // On destructure le content et les items de requirements et roles en les renommants pour les différenciés
  const { content: contentRequirement, items: itemsRequirement } = requirements;
  const { content: contentRole, items: itemsRole } = role;

  // Company Header
  companyLogo.style = `background-color: ${logoBackground}`;
  companyImg.src = `https://ecf-dwwm.cefim-formation.org${logo}`;
  companyImg.alt = `${company}-logo`;
  companyName.textContent = company;
  companyWebsite.textContent = `${company}.com`;
  companyUrlBtn.href = website;

  // PostAt
  PostAt.textContent = `${timestampPost(postedAt)} ago .`;
  const Contract = document.createElement("span");
  Contract.textContent = contract;
  PostAt.appendChild(Contract);

  // Position
  Position.textContent = position;
  // location
  Location.textContent = location;
  // Company Site
  MainBtn.href = apply;
  // Description
  Description.textContent = description;
  // Requirement Definition
  RequirementsDef.textContent = contentRequirement;
  // Roles Definition
  RolesDef.textContent = contentRole;

  // Requirement List
  RequirementsList.innerHTML = "";
  itemsRequirement.map((item) => {
    const list = document.createElement("li");
    const span = document.createElement("span");
    const p = document.createElement("p");

    p.textContent = item;

    list.appendChild(span);
    list.appendChild(p);

    RequirementsList.appendChild(list);
  });

  // Roles List
  RolesList.innerHTML = "";
  itemsRole.map((item, index) => {
    const list = document.createElement("li");
    const span = document.createElement("span");
    const p = document.createElement("p");

    span.textContent = ++index;
    p.textContent = item;

    list.appendChild(span);
    list.appendChild(p);

    RolesList.appendChild(list);
  });

  // Position Company
  companyPosition.textContent = position;

  // Remove Loader
  hiddeLoading();
};

export default displayDetail;
