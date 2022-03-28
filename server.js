// DEPENDENCIES
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

// IMPORT STATEMENTS
const playerController = require("./controllers/playerController");
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
app.use("/player", playerController);
app.use("/pony", ponyController);
app.use("/spells", spellController);

//DEFAULT MESSAGE
app.get('/', (req, res) => {
    res.json({
        status: 200,
        msg: "default route is working, but there's nothing to see."
    })
})

// PORT LISTENING
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));