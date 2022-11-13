import { getElement, getStorageItem, setStorageItem } from "../utils.js";

// On pointe vers les balises necessaire
const toggleMode = getElement(".nav-darkMode");
const body = document.body;

const darkStorage = getStorageItem("darkmode"); //DarkMode enregistrer de la session précédente

const isDarkMode =
  window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches; //DarkMode des preferences systèmes

if (darkStorage === null && isDarkMode) {
  body.classList.add("darken");
  toggleMode.classList.add("dark");
} else if (darkStorage) {
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
