//dependencies
const express = require("express");
const router = express.Router();

//imports
const Spell = require("../models/Spell");

//GET ALL SPELLS
router.get("/", (req, res) => {
    Spell.find().then((allSpells) => {
        res.json({
            status: 200,
            spells: allSpells,
        });
    });
});

//GET SINGLE SPELL
router.get("/name", (req, res) => {
    Spell.findOne({name: req.params.name }).then((spell) => {
        res.json({
            status: 200,
            spell: spell,
        });
    });
});

//UPDATE A SPELL BY NAME
router.put("/update/:name", (req, res) => {
    Spell.findOneAndUpdate({ name: req.params.name }, req.body, {
        new: true,
    }).then((spell) => {
        res.json({
            status: 200,
            updatedSpell: spell
        });
    });
});

//export
module.exports = router;