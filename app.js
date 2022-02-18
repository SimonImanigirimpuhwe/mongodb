const express = require("express");
// require("./models/db")
const userRoutes = require("./routes/user")

const app = express();

app.use(express.json())

//routes middleware
app.use("/users", userRoutes)


app.use('/', (req, res) => {
    res.status(200).json({message: 'Welcome to mongoDB course!'})
});

module.exports =  app