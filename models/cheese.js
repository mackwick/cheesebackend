//DEPENDENCIES
const mongoose = require("./connection");

//SCHEMA/MODEL
const { Schema, model } = mongoose;

const CheeseSchema = new Schema({
  name: String,
  image: String,
  title: String,
});

const Cheese = model("Cheese", CheeseSchema);

module.exports = Cheese;
