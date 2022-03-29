//dependencies
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

//imports
const {User, validate} = require("../models/User")

//POST MVP
const auth = require("../middleware/authMiddleware")
const admin = require("../middleware/admin")
const validObjectId = require("../middleware/validObjectId")

//creates a new user
router.post("/", async (req, res) => {
    const {error} = validate(req.body)
    if(error)
        return res.status(400).send({ message: error.details[0].message})

    const user = await User.findOne({email: req.body.email})
    if(user)
        return res.status(409).send({ message: "User with given e-mail already exists"})
        
    const salt = await bcrypt.genSalt(Number(process.env.SALT))
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    let newUser = await User({
        ...req.body,
        password: hashPassword
    }).save();

    newUser.password = undefined;
    newUser._v = undefined;
    res.status(201).send({data: newUser, message: "User created successfully"})
});


//POST MVP ROUTES - POSTMAN ONLY
//get all users route
// router.get('/', async (req, res) => {
//     const users = await User.find().select("-password -_v");
//     res.status(200).send({data: users});
// });

// //get user by ID
// router.get("/:id", async (req, res) =>  {
//     const user = await User.findById(req.params.id).select("-password -_v")
//     res.status(200).send({data:user})
// });

// //delete user by ID
// router.delete("/:id", async(req, res) =>{
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).send({message: "Successfully deleted user"})
// });

//export
module.exports = router;