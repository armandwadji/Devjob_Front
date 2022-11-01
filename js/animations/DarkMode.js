import { getElement, getStorageItem, setStorageItem } from "../utils.js";

const toggleMode = getElement(".nav-darkMode");
const body = document.body;
const darkStorage = getStorageItem("darkmode");

if (darkStorage) {
  body.classList.add("darken");
  toggleMode.classList.add("dark");
} else {
  body.classList.remove("darken");
  toggleMode.classList.remove("dark");
}

toggleMode.addEventListener("click", () => {
  toggleMode.classList.toggle("dark");
  body.classList.toggle("darken");

  body.classList.contains("darken")
    ? setStorageItem("darkmode", true)
    : setStorageItem("darkmode", false);
});
