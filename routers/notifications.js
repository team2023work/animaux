
const router = require("express").Router()
const NotificationController = require("../controllers/notifications")
const handleError = require("../middleware/handleError")
const HandleValidatorError = require("../middleware/HandleValidatorError")
const authMiddleware = require("../middleware/jwt/authMiddleware")
const { ApiEndpoints } = require("../common/apiEndpoints")
const { Add } = require("../middleware/validators/notification")
 
// list 
router.get(ApiEndpoints.Notifications.list, NotificationController.Get)

// create
router.post(ApiEndpoints.Notifications.create, authMiddleware, Add, HandleValidatorError, NotificationController.Add , handleError)

 
module.exports = router