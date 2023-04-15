const { check } = require('express-validator')

const Add = [
    check("title").notEmpty().withMessage("title field is required"),
    check("description").notEmpty().withMessage("description field is required"),
    check("image").notEmpty().withMessage("image field is required"),
    check("postId").notEmpty().withMessage("postId field is required"),
    check("visible").notEmpty().withMessage("visible field is required"),
]

const Edit = [ 
    check("title").notEmpty().withMessage("title field is required"),
    check("description").notEmpty().withMessage("description field is required"),
    check("image").notEmpty().withMessage("image field is required"),
    check("postId").notEmpty().withMessage("postId field is required"),
    check("visible").notEmpty().withMessage("visible field is required"),
]

const Delete = [ 
    check("id").isLength({min: 10}).withMessage("id field is required"),
]

module.exports = { Add, Edit, Delete }