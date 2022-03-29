//depdencies
const express = require("express");
const router = express.Router();
const Joi = require("joi");
const bcrypt = require('bcrypt');

//imports
const { User } = require("../models/User");

router.post("/", async(req, res) => {
    const user = await User.findOne({email: req.body.email });
    if(!user)
        return res.status(400).send({message: "Invalid e-mail or password"});
    
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword)
        return res.status(400).send({message: "Invalid e-mail or password"});

    const token = user.generateAuthToken();
    res.status(200).send({data: token, message: "Signing in please wait"})
})

//export
module.exports = router;