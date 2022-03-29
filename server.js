// DEPENDENCIES
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("express-async-errors");
const PORT = process.env.PORT;

// IMPORT STATEMENTS
const playerController = require("./controllers/playerController");
const spellController = require("./controllers/spellController");
const ponyController = require("./controllers/ponyController");
const userRoutes = require("./controllers/userController");
const authRoutes = require("./controllers/authController");


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
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

//DEFAULT MESSAGE
app.get('/', (req, res) => {
    res.json({
        status: 200,
        msg: "default route is working, but there's nothing to see."
    })
})

// PORT LISTENING
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));