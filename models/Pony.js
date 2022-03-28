const mongoose = require("../connection")

const ponySchema = new mongoose.Schema({
    aithon : Boolean,
    boreas : Boolean,
    enbarr : Boolean,
    gullfaxi : Boolean,
    markab : Boolean,
    xanthos : Boolean,
    nightmare : Boolean,
    kirin : Boolean
});

module.exports = ponySchema;