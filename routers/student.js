const express = require("express");

//Assign express module Router function to a variable
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    name: "lahiru",
    age: 20,
  });
});

// Exports the router. if else cannot access this file
module.exports = router;
