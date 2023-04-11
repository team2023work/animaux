const router = require("express").Router()
const AdminController = require("../controllers/admin")
const handleError = require("../middleware/handleError")
const HandleValidatorError = require("../middleware/HandleValidatorError")
const idValidator = require("../middleware/idValidator")
const authMiddleware = require("../middleware/jwt/authMiddleware")
const { ApiEndpoints } = require("../common/apiEndpoints")
const { Edit , Login , Create , Forgot, Reset } = require("../middleware/validators/admin")

// list 
router.get(ApiEndpoints.Admins.list, authMiddleware, AdminController.Get ,handleError)

// me
router.get(ApiEndpoints.Admins.me, authMiddleware, AdminController.Me , handleError)

// create
router.post(ApiEndpoints.Admins.create, authMiddleware, Create, HandleValidatorError, AdminController.Create , handleError)

// login
router.post(ApiEndpoints.Admins.login , Login, HandleValidatorError, AdminController.Login)

// edit 
router.put(ApiEndpoints.Admins.edit, authMiddleware, idValidator, Edit, HandleValidatorError, AdminController.Edit , handleError)

// forgot
router.put(ApiEndpoints.Admins.forgot, Forgot, HandleValidatorError, AdminController.Forgot)

// reset
router.put(ApiEndpoints.Admins.reset, authMiddleware, idValidator, Reset, HandleValidatorError, AdminController.Reset, handleError)


module.exports = router