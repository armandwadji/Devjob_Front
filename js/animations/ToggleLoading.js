import { getElement } from "../utils.js";

//fonction d'affichage et masquage du loader spinner
const showLoading = () => {
  const loading = getElement(".loader");
  loading.classList.add("show-loader");
};

const hiddeLoading = () => {
  const loading = getElement(".loader");
  loading.classList.remove("show-loader");
};

//fonction d'affichage et masquage du loader progress
const showprogress = () => {
  const loading = getElement(".progress-container");
  loading.classList.add("show-loader");
};

const hiddeprogress = () => {
  const loading = getElement(".progress-container");
  loading.classList.remove("show-loader");
};

export { showLoading, hiddeLoading, showprogress, hiddeprogress };
