const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    return token
}

const validate = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: passwordComplexity().required()
    });
    return schema.validate(user)
};

const User = mongoose.model("user", userSchema);

module.exports = {User, validate}