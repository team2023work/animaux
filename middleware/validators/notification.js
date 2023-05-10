const { check } = require('express-validator')

const Add = [
    check("title").notEmpty().withMessage("title field is required"),
    check("message").notEmpty().withMessage("message field is required"),
    check("post").notEmpty().withMessage("post field is required"),
]


module.exports = { Add }