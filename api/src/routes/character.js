const express = require("express");
const { getApiCharacters } = require("../controllers/character");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const allCharacters = await getApiCharacters();
  allCharacters
    ? res.status(200).send(allCharacters)
    : res.status(404).send("No hay datos de la api");
});

module.exports = router;
