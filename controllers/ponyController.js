//dependencies
const express = require("express");
const router = express.Router();

//imports
const Pony = require("./../models/Pony");

//UPDATE A PONY
router.patch("/:id", (req, res) => {
    Pony.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
        (newPony) => {
            res.json({
                status: 200,
                Pony: newPony,
            });
        }
    );
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