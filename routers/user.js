const express = require("express");

//Assign express module Router function to a variable
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    user: "janith",
  });
});

router.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

// Exports the router. if else cannot access this file
module.exports = router;
