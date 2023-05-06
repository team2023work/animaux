
const router = require("express").Router()
const LikesController = require("../controllers/likes")
const handleError = require("../middleware/handleError")
const HandleValidatorError = require("../middleware/HandleValidatorError")
const authMiddleware = require("../middleware/jwt/authMiddleware")
const { ApiEndpoints } = require("../common/apiEndpoints")
const { Add, Delete } = require("../middleware/validators/like")
 
// list 
router.get(ApiEndpoints.Likes.list, LikesController.Get)

// create
router.post(ApiEndpoints.Likes.create, authMiddleware, Add, HandleValidatorError, LikesController.Add , handleError)

// delete
router.delete(ApiEndpoints.Likes.delete, authMiddleware, Delete, HandleValidatorError, LikesController.Remove, handleError)

 
module.exports = router