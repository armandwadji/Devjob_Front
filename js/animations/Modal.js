import { getElement } from "../utils.js";

// ON POINTE SUR LES ELEMENTS NECESSAIRES
const filterIcon = getElement(".form-icons__filter");
const formModal = getElement(".form-modal");
const form = getElement(".homeForm");
const modal = getElement(".modal");

filterIcon.addEventListener("click", () => {
  if (!form.classList.contains("modal")) {
    formModal.style.visibility = "visible";
    modal.style.visibility = "visible";
    form.style.visibility = "visible";
    form.classList.toggle("modal");
  }
});

document.addEventListener("click", (e) => {
  const element = e.target;

  if (element.classList.contains("modal")) {
    modal.style.visibility = "hidden";
    form.style.visibility = "visible";
    form.classList.toggle("modal");
  }
});
