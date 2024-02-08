//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const CheeseRouter = require("./controllers/cheeseroutes");

const app = express();

//MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/cheese", CheeseRouter);

//ROOT ROUTE
app.get("/", (req, res) => {
  res.send("Hello this is the cheese app!");
});

//SERVER LISTENER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`I'm listening on port ${PORT}`);
});
