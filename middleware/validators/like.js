const { check } = require('express-validator')

const Add = [
    check("userId").notEmpty().withMessage("userId field is required"),
    check("postId").notEmpty().withMessage("postId field is required"),
]


const Delete = [ 
    check("id").isLength({min: 10}).withMessage("id field is required"),
]

module.exports = { Add, Delete }