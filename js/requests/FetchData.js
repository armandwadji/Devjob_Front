const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new error("your request is fail, check the url.");
  }
};

export default fetchData;
