
const router = require("express").Router()
const UserController = require("../controllers/users")
const handleError = require("../middleware/handleError")
const HandleValidatorError = require("../middleware/HandleValidatorError")
const idValidator = require("../middleware/idValidator")
const authMiddleware = require("../middleware/jwt/authMiddleware")
const { ApiEndpoints } = require("../common/apiEndpoints")
const { Edit , Login , SignUp , Forgot, Reset } = require("../middleware/validators/user")

// list 
router.get(ApiEndpoints.Users.list, authMiddleware, UserController.Get ,handleError)

// me
router.get(ApiEndpoints.Users.me, authMiddleware, UserController.Me , handleError)

// signup
router.post(ApiEndpoints.Users.signup, SignUp, HandleValidatorError, UserController.Signup)

// login
router.post(ApiEndpoints.Users.login , Login, HandleValidatorError, UserController.Login)

// edit 
router.put(ApiEndpoints.Users.edit, authMiddleware, idValidator, Edit, HandleValidatorError, UserController.Edit , handleError)

// forgot
router.put(ApiEndpoints.Users.forgot, Forgot, HandleValidatorError, UserController.Forgot)

// confirm
router.get(ApiEndpoints.Users.confirm , idValidator, UserController.Confirm)

// reset
router.put(ApiEndpoints.Users.reset, authMiddleware, idValidator, Reset, HandleValidatorError, UserController.Reset, handleError)


module.exports = router