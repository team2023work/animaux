
const router = require("express").Router()
const MediaController = require("../controllers/media")
const handleError = require("../middleware/handleError")
const idValidator = require("../middleware/idValidator")
const authMiddleware = require("../middleware/jwt/authMiddleware")
const { ApiEndpoints } = require("../common/apiEndpoints")
const { singleMedia } = require("../common/uploader")

// view 
router.get(ApiEndpoints.Media.view, idValidator, MediaController.getMedia, handleError)

// create
router.get(ApiEndpoints.Media.create, authMiddleware, singleMedia("./images", "image") , MediaController.createMedia , handleError)


module.exports = router