const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        required: true
    },
    password: String
});

module.exports = mongoose.model("Users", userSchema)