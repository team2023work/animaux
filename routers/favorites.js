
const router = require("express").Router()
const FavoriteController = require("../controllers/favorites")
const handleError = require("../middleware/handleError")
const HandleValidatorError = require("../middleware/HandleValidatorError")
const authMiddleware = require("../middleware/jwt/authMiddleware")
const { ApiEndpoints } = require("../common/apiEndpoints")
const { Add, Delete } = require("../middleware/validators/favorite")
 
// list 
router.get(ApiEndpoints.Favorites.list, FavoriteController.Get)

// create
router.post(ApiEndpoints.Favorites.create, authMiddleware, Add, HandleValidatorError, FavoriteController.Add , handleError)

// delete
router.delete(ApiEndpoints.Favorites.delete, authMiddleware, Delete, HandleValidatorError, FavoriteController.Remove, handleError)

 
module.exports = router