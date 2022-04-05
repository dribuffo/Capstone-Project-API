//dependencies
const express = require("express");
const router = express.Router();

//imports
const Bird = require("./../models/Bird");

//UPDATE A BIRD
router.put("/update/:name", (req, res) => {
    Bird.findOneAndUpdate({ name: req.params.name }, req.body, {
        new: true,
    }).then((bird) => {
        res.json({
            status: 200,
            updatedBird: bird
        });
    });
});

//GET BIRDS
router.get("/", (req, res) => {
    Bird.find().then((allBirds) => {
        res.json({
            status: 200,
            Bird: allBirds,
        });
    });
});

//export
module.exports = router;