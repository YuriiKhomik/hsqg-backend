const express = require("express");

const quotes = require("../../data/quotes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(quotes);
});
router.get("/:id", (req, res) => {
  res.json(quotes[0]);
});
router.post("/", (req, res) => {
  res.json(quotes[0]);
});
router.put("/:id", (requ, res) => {
  res.json(quotes[0]);
});
router.delete("/:id", (req, res) => {
  res.json(quotes[0]);
});

module.exports = router;
