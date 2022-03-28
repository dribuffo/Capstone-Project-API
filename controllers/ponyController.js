//dependencies
const express = require("express");
const router = express.Router();

//imports
const Pony = require("./../models/Pony");

//UPDATE A PONY
router.put("/update/:name", (req, res) => {
    Pony.findOneAndUpdate({ name: req.params.name }, req.body, {
        new: true,
    }).then((pony) => {
        res.json({
            status: 200,
            updatedPony: pony
        });
    });
});

//GET PONIES
router.get("/", (req, res) => {
    Pony.find().then((allPonies) => {
        res.json({
            status: 200,
            Pony: allPonies,
        });
    });
});

//export
module.exports = router;