const { check } = require('express-validator')

const Add = [
    check("content").notEmpty().withMessage("content field is required"),
    check("userId").notEmpty().withMessage("userId field is required"),
    check("postId").notEmpty().withMessage("postId field is required"),
]

const Edit = [ 
    check("content").notEmpty().withMessage("content field is required"),
    check("id").isLength({min: 10}).withMessage("id field is required"),
]

const Delete = [ 
    check("id").isLength({min: 10}).withMessage("id field is required"),
]

module.exports = { Add, Edit, Delete }