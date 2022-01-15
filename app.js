const express = require("express");
require("./models/db")
const userRoutes = require("./routes/user")

const app = express();

app.use(express.json())

//routes middleware
app.use("/users", userRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))