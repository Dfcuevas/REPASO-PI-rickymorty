const { Router } = require("express");
const characterRoutes = require("./character");
const episodesRoutes = require("./episodes");

const router = Router();

// Configurar los routers

router.use("/characters", characterRoutes);
router.use("/episodes", episodesRoutes);
router.use("/character", characterRoutes);

module.exports = router;
