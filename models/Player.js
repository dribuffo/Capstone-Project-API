const { SchemaTypes } = require("../connection");
const mongoose = require("../connection");
const ponySchema = require("./Pony");
const bluSchema = require("./Spell");
const birdSchema = require("./Bird")

const playerSchema = new mongoose.Schema({
    name: String,
    is_active : {type: Boolean, default: false},
    has_BLU : {type: Boolean, default: false},
    blu_spells : bluSchema,
    pony : ponySchema,
    bird: birdSchema,
    // dog: dogSchema,
    // dragon: dragonSchema,
    // lynx: lynxSchema,
    // raid: raidSchema,
    // other: otherSchema,
});

module.exports = mongoose.model("Player", playerSchema)