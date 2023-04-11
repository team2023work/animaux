
const router = require("express").Router()
const CategoryController = require("../controllers/categories")
const handleError = require("../middleware/handleError")
const HandleValidatorError = require("../middleware/HandleValidatorError")
const idValidator = require("../middleware/idValidator")
const authMiddleware = require("../middleware/jwt/authMiddleware")
const { ApiEndpoints } = require("../common/apiEndpoints")
const { Edit , Add } = require("../middleware/validators/category")

// list 
router.get(ApiEndpoints.Categories.list, CategoryController.Get)

// create
router.post(ApiEndpoints.Categories.create, authMiddleware, Add, HandleValidatorError, CategoryController.Add , handleError)

// edit 
router.put(ApiEndpoints.Categories.edit, authMiddleware, idValidator, Edit, HandleValidatorError, CategoryController.Edit , handleError)

// delete
router.delete(ApiEndpoints.Categories.delete, authMiddleware , idValidator, CategoryController.Remove, handleError)


module.exports = router