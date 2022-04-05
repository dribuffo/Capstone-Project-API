const mongoose = require("../connection")

const ponySchema = new mongoose.Schema({
    aithon : {type: Boolean, default: false},
    boreas : {type: Boolean, default: false},
    enbarr : {type: Boolean, default: false},
    gullfaxi : {type: Boolean, default: false},
    markab : {type: Boolean, default: false},
    xanthos : {type: Boolean, default: false},
    nightmare : {type: Boolean, default: false},
    kirin : {type: Boolean, default: false}
});

module.exports = ponySchema;