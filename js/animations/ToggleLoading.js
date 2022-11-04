import { getElement } from "../utils.js";

//***** LOADER CIRCLE : HIDDEN - VISIBLE *****/
const showLoading = () => {
  const loading = getElement(".loader");
  loading.classList.add("show-loader");
};

const hiddeLoading = () => {
  const loading = getElement(".loader");
  loading.classList.remove("show-loader");
};
//****************************************

//***** LOADER POGRESS : HIDDEN - VISIBLE *****/
const showprogress = () => {
  const loading = getElement(".progress-container");
  loading.classList.add("show-loader");
};

const hiddeprogress = () => {
  const loading = getElement(".progress-container");
  loading.classList.remove("show-loader");
};
//****************************************

export { showLoading, hiddeLoading, showprogress, hiddeprogress };
