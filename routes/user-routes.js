const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapper in the world",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

router.get("/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_PLACES.find((u) => {
    return u.creator === userId;
  });
  res.json({ user });
});

module.exports = router;
