//DEPENDENCIES
const express = require("express");
const Cheese = require("./../models/cheese");

const router = express.Router();

//ROUTES
//Index
router.get("/", async (req, res) => {
  try {
    res.json(await Cheese.find({}));
  } catch (err) {
    res.status(400).json(err);
  }
});

//Create
router.post("/", async (req, res) => {
  try {
    res.json(await Cheese.create(req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Cheese.findByIdAndDelete(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    res.json(await People.findByIdAndUpdate(req.params.id, req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

//Show
router.get("/:id", async (req, res) => {
  try {
    res.json(await Cheese.findById(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
