const mongoose = require("mongoose")
const Users  = require("../models/user");

const signupController= async(req, res) => {
    const {first_name, last_name, email, password}  = req.body;
    try {
        const newUser = new Users({
            first_name,
            last_name,
            email,
            password
        })
        const savedUser = await newUser.save()
        res.status(201).json({message: "account created successfully", savedUser})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const getUsers = async(req, res) => {
    try {
        const allUsers =  await Users.find()
        res.status(200).json({msg: "all users retrieved", allUsers})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getUser = async (req, res) => {
    const {_id} = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({error: "Invalid  id"})
    try {
        const user =  await Users.findById({_id})

        if (!user) return res.status(404).json({msg: "User not found"})

        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
const updateUser = async (req, res) => {
    const {first_name} = req.body;
    try {
        const {_id} = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({error: "Invalid  id"})
    
    const updated_user = await Users.updateOne({_id}, {$set: {first_name}}, {new:true})
    res.status(200).json({msg: "user updated successfully", updated_user})

    } catch (error) {
        res.status(500).json({msg: error})
    }
}
const deleteUser = async (req, res) => {
    const {_id} = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({error: "Invalid  id"})
    try {
        const deletedUser = await Users.deleteOne({_id})
        res.status(200).json({msg: "user deleted successfully", deletedUser})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
module.exports = {
    signupController,
    deleteUser,
    updateUser,
    getUsers,
    getUser
}