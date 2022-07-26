const express = require("express");
const { getAllinfo } = require("../controllers/character");
const { Character, Episode } = require("../db");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const allCharacters = await getAllinfo();
  allCharacters
    ? res.status(200).send(allCharacters)
    : res.status(404).send("No hay datos de la api");
});

router.post("/", async (req, res, next) => {
  const { name, species, origin, image, episodes } = req.body;

  const newCharacter = await Character.create({
    name,
    species,
    origin,
    image,
  });

  /* newCharacter.addEpisode(episodes); */

  const episodeDb = await Episode.findAll({
    where: { name: episodes }, // or episode?
  });
  newCharacter.addEpisode(episodeDb);

  /* hasta aca */

  newCharacter
    ? res.status(201).send(newCharacter)
    : res.status(404).send("Error al crear el personaje");

  return newCharacter;
});

module.exports = router;
