const  app = require("./app");

const PORT = process.env.PORT || 3000

// eslint-disable-next-line
const server = app.listen(PORT, () => console.log(`server running on port ${PORT}`));

module.exports =  server

