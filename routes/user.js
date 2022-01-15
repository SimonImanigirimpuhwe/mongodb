const express = require("express");
const userController = require("../controllers/users");
const updateValidator = require("../middleware/signupValidation");
const router  = express.Router();

router.post('/signup', userController.signupController)
router.get('/', userController.getUsers)
router.get('/:_id', userController.getUser)
router.put('/:_id',  updateValidator, userController.updateUser)
router.delete('/:_id', userController.deleteUser)



module.exports = router