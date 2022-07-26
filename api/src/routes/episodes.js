const express = require("express");
/* const getEpisodesApi = require("../controllers/episode"); */
const { Episode } = require("../db");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const apiData = await Episode.findAll();

    apiData
      ? res.status(200).send(apiData)
      : res.status(404).send("No hay datos de la API");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
