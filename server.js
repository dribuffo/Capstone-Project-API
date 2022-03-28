// DEPENDENCIES
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

// IMPORT STATEMENTS
// const charController = require("./controllers/charController");
const spellController = require("./controllers/spellController");
const ponyController = require("./controllers/ponyController");

// STARTING APP
const app = express();

// RUNNING MIDDLEWEAR
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

//ROUTES
// app.use("/character", charController);
app.use("/pony", ponyController);
app.use("/spells", spellController);

// PORT LISTENING
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));