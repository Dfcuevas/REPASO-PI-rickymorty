const { Router } = require("express");
const characterRoutes = require("./character");
const episodesRoutes = require("./episodes");

const router = Router();

// Configurar los routers

router.use("/character", characterRoutes);
router.use("/episodes", episodesRoutes);

module.exports = router;
