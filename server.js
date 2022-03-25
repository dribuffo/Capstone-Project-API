// DEPENDENCIES
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

// IMPORT STATEMENTS - EXAMPLE IMPORTS
// const charController = require("./controllers/charController");
// const statController = require("./controllers/statController");
// const spellController = require("./controllers/spellController");

// STARTING APP
const app = express();

// RUNNING MIDDLEWEAR
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

//ROUTES - EXAMPLE ROUTES
// app.use("/character", charController);
// app.use("/stats", statController);
// app.use("/spells", spellController);

// PORT LISTENING
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));