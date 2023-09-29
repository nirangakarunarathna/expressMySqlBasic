const express = require("express");
const router = express.Router();

const fancyItemModel = require("../model/fancyItemModel.js");

router.get("/getItems", async (req, res) => {
  try {
    const result = await fancyItemModel.getAllFancyItems();
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getFavoriteItems", async (req, res) => {
  try {
    const result = await fancyItemModel.getFavoriteItems();
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getCartItems", async (req, res) => {
  try {
    const result = await fancyItemModel.getCartItems();
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/addToFavorite/", async (req, res) => {
  try {
    const result = await fancyItemModel.addToFavorite(
      req.body.userId,
      req.body.itemId
    );
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/removeFromFavorite/", async (req, res) => {
  try {
    const result = await fancyItemModel.removeFromFavorite(
      req.body.userId,
      req.body.itemId
    );
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/addToCart/", async (req, res) => {
  try {
    const result = await fancyItemModel.addToCart(
      req.body.userId,
      req.body.itemId,
      req.body.quantity
    );
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/removeFromCart/", async (req, res) => {
  try {
    const result = await fancyItemModel.removeFromCart(
      req.body.userId,
      req.body.itemId
    );
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = router;
