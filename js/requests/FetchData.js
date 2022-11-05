import error404 from "../display/ERROR404.js";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    document.body.innerHTML = error404();
    throw new error("your request is fail, check the url.");
  }
};

export default fetchData;
