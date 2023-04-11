
const router = require("express").Router()
const PostController = require("../controllers/posts")
const handleError = require("../middleware/handleError")
const HandleValidatorError = require("../middleware/HandleValidatorError")
const idValidator = require("../middleware/idValidator")
const authMiddleware = require("../middleware/jwt/authMiddleware")
const { ApiEndpoints } = require("../common/apiEndpoints")
const { Edit , Add } = require("../middleware/validators/post")

// list 
router.get(ApiEndpoints.Posts.list, PostController.Get)

// create
router.post(ApiEndpoints.Posts.create, authMiddleware, Add, HandleValidatorError, PostController.Add , handleError)

// edit 
router.put(ApiEndpoints.Posts.edit, authMiddleware, idValidator, Edit, HandleValidatorError, PostController.Edit , handleError)

// signal
router.put(ApiEndpoints.Posts.signal, authMiddleware , idValidator, PostController.Signal, handleError)


module.exports = router