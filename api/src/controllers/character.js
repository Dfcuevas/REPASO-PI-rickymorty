const axios = require("axios");
const { Character, Episode } = require("../db");

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
  } catch (error) {
    console.log(error);
  }
};

const getDbCharacters = async () => {
  return await Character.findAll({
    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllinfo = async () => {
  try {
    const dbinfo = await getDbCharacters();

    const apiInfo = await getApiCharacters();
    const infoTot = dbinfo?.concat(apiInfo);
    return infoTot;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getApiCharacters,
  getDbCharacters,
  getAllinfo,
};
