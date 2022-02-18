const express = require("express");
require("./models/db")
const userRoutes = require("./routes/user")
const morgan = require("morgan")

const app = express();

app.use(express.json())
app.use(morgan("dev"))

//routes middleware
app.use("/users", userRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))