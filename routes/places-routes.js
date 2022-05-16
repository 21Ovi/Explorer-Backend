const express = require("express");

const placesControllers = require("../controllers/place-controllers");

const router = express.Router();

router.get("/:pid", placesControllers.getPlaceById);

router.get("/user/:uid", placesControllers.getPlaceByUserId);

module.exports = router;
