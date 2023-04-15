
const router = require("express").Router()
const SliderController = require("../controllers/sliders")
const handleError = require("../middleware/handleError")
const HandleValidatorError = require("../middleware/HandleValidatorError")
const authMiddleware = require("../middleware/jwt/authMiddleware")
const { ApiEndpoints } = require("../common/apiEndpoints")
const { Edit , Add, Delete } = require("../middleware/validators/slider")
 
// list 
router.get(ApiEndpoints.Sliders.list, SliderController.Get)

// create
router.post(ApiEndpoints.Sliders.create, authMiddleware, Add, HandleValidatorError, SliderController.Add , handleError)

// edit
router.put(ApiEndpoints.Sliders.edit, authMiddleware, Edit, HandleValidatorError, SliderController.Edit , handleError)

// delete
router.delete(ApiEndpoints.Sliders.delete, authMiddleware, Delete, HandleValidatorError, SliderController.Remove, handleError)

 
module.exports = router