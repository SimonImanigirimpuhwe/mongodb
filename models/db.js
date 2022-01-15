const mongoose = require("mongoose")
require("dotenv/config")


const url = process.env.DB_CONNECTION;

module.exports = mongoose.connect(url)
.then(() => console.log("Connected to DB", url))
.catch((err) => console.log(err))