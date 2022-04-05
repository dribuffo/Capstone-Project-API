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
    .populate("blu_spells")
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
    .populate("blu_spells")
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
        .populate("blu_spells")
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
    const play = await Player.findOne({name: req.params.charName}).populate("blu_spells");
    const magic = req.params.spellName
    play.blu_spells[magic] = req.body[magic]
    play.save()
    res.json({status: 200, Character: play})
})

//UPDATE A PLAYER'S PONYS BY PLAYER NAME AND PONY NAME
router.put("/update/:charName/pony/:ponyName", async (req, res) => {
    const play = await Player.findOne({name: req.params.charName}).populate("pony");
    const horse = req.params.ponyName
    play.pony[horse] = req.body[horse]
    play.save()
    res.json({status: 200, Character: play})
})

//UPDATE A PLAYER'S BIRDS BY PLAYER NAME AND BIRD NAME
router.put("/update/:charName/bird/:birdName", async (req, res) => {
    const play = await Player.findOne({name: req.params.charName}).populate("bird");
    const bird = req.params.birdName
    play.bird[bird] = req.body[bird]
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