const updateValidator = (req, res, next) => {
    if( req.body.first_name.length < 2) return res.status(400).json({msg: "Name should be longer than 2 characters"})
    next()
}

module.exports = updateValidator