
const router = require("express").Router()
const UserController = require("../controllers/users")
const handleError = require("../middleware/handleError")
const HandleValidatorError = require("../middleware/HandleValidatorError")
const idValidator = require("../middleware/idValidator")
const authMiddleware = require("../middleware/jwt/authMiddleware")
const { ApiEndpoints } = require("../common/apiEndpoints")
const { Edit , Login , SignUp , Forgot, Reset } = require("../middleware/validators/user")

// list 
router.get(ApiEndpoints.Users.list, UserController.Get)

// me
router.get(ApiEndpoints.Users.me, authMiddleware, UserController.Me , handleError)

// signup
router.post(ApiEndpoints.Users.signup, authMiddleware, SignUp, HandleValidatorError, UserController.Signup , handleError)

// login
router.post(ApiEndpoints.Users.login, authMiddleware , Login, HandleValidatorError, UserController.Login , handleError)

// edit 
router.put(ApiEndpoints.Users.edit, authMiddleware, idValidator, Edit, HandleValidatorError, UserController.Edit , handleError)

// forgot
router.put(ApiEndpoints.Users.forgot, Forgot, HandleValidatorError, UserController.Forgot, handleError)

// confirm
router.put(ApiEndpoints.Users.confirm, authMiddleware , idValidator, UserController.Confirm, handleError)

// reset
router.put(ApiEndpoints.Users.reset, authMiddleware, idValidator, Reset, HandleValidatorError, UserController.Reset, handleError)


module.exports = router