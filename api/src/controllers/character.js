const axios = require("axios");

const getApiCharacters = async () => {
  try {
    const apiInfo = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const apiJson = apiInfo.data.results?.map((el) => {
      return {
        name: el.name,
        species: el.species,
        origin: el.origin.name,
        image: el.image,
      };
    });
    return apiJson;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getApiCharacters,
};
