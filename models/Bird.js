const mongoose = require("../connection")

const birdSchema = new mongoose.Schema({
    rose_lanner : {type: Boolean, default: false},
    white_lanner : {type: Boolean, default: false},
    dark_lanner : {type: Boolean, default: false},
    round_lanner : {type: Boolean, default: false},
    warring_lanner : {type: Boolean, default: false},
    sophic_lanner : {type: Boolean, default: false},
    demonic_lanner : {type: Boolean, default: false},
    firebird : {type: Boolean, default: false}
});

module.exports = birdSchema;