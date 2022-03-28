//dependencies
const express = require("express");
const router = express.Router();

//imports
const Player = require("../models/Player");
const Pony = require("../models/Pony");
const Spell = require("../models/Spell");

//FIND ALL CHARACTERS
router.get("/find", (req, res) => {
    Player.find()
    .populate("spells")
    .populate("pony")
    .then((allChars) => {
        res.json({
            status:200,
            Characters: allChars
        });
    });
});

//FIND A SINGLE CHARACTER BY NAME
router.get("/find/:name", (req, res) => {
    Player.findOne({name: req.params.name})
    .populate("spells")
    .populate("pony")
    .then((oneChar) => {
        res.json({
            status:200,
            Character: oneChar,
        });
    });
});

//ADD A NEW Player
router.post("/create", (req, res) => {
    Player.create(req.body).then((newChar) => {
        res.json({
            status: 200,
            New: newChar,
        });
    });
});

//UPDATE A CHARACTER'S NAME, ACTIVE STATUS, BLU STATUS
router.put("/update/:name", (req, res) => {
    Player.findOneAndUpdate({name: req.params.name}, req.body, {new: true})
        .populate("spells")
        .populate("pony")
        .then((oneChar) => {
            res.json({
                status: 200,
                Character: oneChar,
            });
        });
});

//UPDATE A PLAYER'S SPELLS BY PLAYER NAME AND SPELL NAME
router.put("/update/:charName/BLU/:spellName", async (req, res) => {
    const play = await Player.findOne({name: req.params.charName}).populate("spells");
    const magic = await Spell.findOne({name: req.params.spellName});
    play.spells.push(spell);
    play.save()
    res.json({status: 200, Character: play})
})

//UPDATE A PLAYER'S PONYS BY PLAYER NAME AND PONY NAME
router.put("/update/:charName/pony/:ponyName", async (req, res) => {
    const play = await Player.findOne({name: req.params.charName}).populate("pony");
    const horse = await Pony.findOne({name: req.params.spellName});
    play.pony.push(horse);
    play.save()
    res.json({status: 200, Character: play})
})


//DELETE A CHARACTER
router.delete("/delete/:name", (req, res) => {
    Player.findOneAndDelete({name: req.params.name })
        .then((deletedChar) => {
            res.json({
                status:200,
                Deleted_Character: deletedChar,
            });
        });
});


//export
module.exports = router;