const URLCARDS = "https://ecf-dwwm.cefim-formation.org/api/jobs";
const URLCARD = "https://ecf-dwwm.cefim-formation.org/api/job/";
const URLCARDSEARCH = "https://ecf-dwwm.cefim-formation.org/api/jobs/search?";

// &location=United&fulltime=1&limit=12

//******* Méthode pour sélectionner plus facilemet la classe *******
const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};
// ---------------------------------------------------------------

// *************** LOCAL-STORAGE ACCESSEURS **********************
const setStorageItem = async (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const getStorageItem = (value) => {
  return JSON.parse(localStorage.getItem(value));
};
// -------------------------------------------------------

// *********************** TIMESTAMP POST ************************
const timestampPost = (date) => {
  const datePost = date;
  const today = new Date().getTime();

  // On cacule la difference etre le post et date actuel
  const t = today - datePost;

  const SECONDE = 1000;
  const MINUTE = 60 * SECONDE;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 12 * MONTH;

  //On calcule les années
  let year = Math.floor(t / YEAR);
  let reste = t % YEAR;

  //On calcule les mois
  let months = Math.floor(reste / MONTH);
  reste = reste % MONTH;

  //On calcule les semains
  let weeks = Math.floor(reste / WEEK);
  reste = reste % WEEK;

  //on calcule le nombre de jour
  let day = Math.floor(reste / DAY);
  reste = reste % DAY;

  //on calcule le nombres d'heures
  let hour = Math.floor(reste / HOUR);
  reste = reste % HOUR;

  //on cacules le nombres de minutes
  let minutes = Math.floor(reste / MINUTE);
  reste = reste % MINUTE;

  // on calcule le nombres de secondes
  let secondes = Math.floor(reste / SECONDE);

  //on calcule les millisecondes qu'il nous reste
  reste = reste % 1000;

  //On stocke le temp converti dans un tableau d'objets (utile pour l'ordre d'itération)

  const times = [
    { y: year },
    { mo: months },
    { w: weeks },
    { d: day },
    { h: hour },
    { minute: minutes },
    { seconde: secondes },
  ];

  //On initialise la valeur retourné
  let returnValue = 0;

  for (const time of times) {
    for (const value in time) {
      if (time[value] > 0) {
        returnValue = `${time[value]} ${value}`;
        break;
      }
    }
    if (returnValue !== 0) {
      break;
    }
  }

  return returnValue;
};
// -------------------------------------------------------

// *********************** ID RECUPERATION ************************
//fonction qui récupère l'id de lélément cliqué
const idrecuparation = async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return id;
};
// --------------------------------------------------------

// *********************** BUTTON LOAD MORE ACTIF / INACTIF ************************
const loadMoreDisabled = () => {
  const loadMoreBtn = getElement(".load-more");
  loadMoreBtn.textContent = "not more";
  loadMoreBtn.disabled = true;
  loadMoreBtn.style = "background-color: red ";
};

const loadMoreEnabled = () => {
  const loadMoreBtn = getElement(".load-more");
  loadMoreBtn.textContent = "load more";
  loadMoreBtn.disabled = false;
  loadMoreBtn.style = "background-color: #5964e0 ";
};
// --------------------------------------------------------

export {
  URLCARDS,
  URLCARD,
  URLCARDSEARCH,
  getElement,
  setStorageItem,
  getStorageItem,
  timestampPost,
  idrecuparation,
  loadMoreDisabled,
  loadMoreEnabled,
};
