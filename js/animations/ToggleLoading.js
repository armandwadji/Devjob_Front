import { getElement } from "../utils.js";

//fonction d'affichage et suppession de la barre de loading
const showLoading = () => {
  const loading = getElement(".loader");
  loading.classList.add("show-loader");
};

const hiddeLoading = () => {
  const loading = getElement(".loader");
  loading.classList.remove("show-loader");
};

export { showLoading, hiddeLoading };
