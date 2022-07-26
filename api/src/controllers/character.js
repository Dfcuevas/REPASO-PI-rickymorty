const axios = require("axios");

const getApiCharacters = async () => {
  try {
    const allCharacters = [];
    let apiUrl = "https://rickandmortyapi.com/api/character";
    for (let i = 0; i <= 4; i++) {
      let apiData = await axios.get(apiUrl);

      apiData.data.results?.forEach((el) => {
        return allCharacters.push({
          id: el.id,
          name: el.name,
          species: el.species,
          origin: el.origin.name,
          image: el.image,
          characterApi: true,
        });
      });

      apiUrl = apiData.data.info.next;
    }
    return allCharacters;
    /* const apiInfo = await axios.get(
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
    return apiJson; */
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getApiCharacters,
};
