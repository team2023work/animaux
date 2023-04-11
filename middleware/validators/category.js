const { check } = require('express-validator')

const Add = [
    check("name").notEmpty().withMessage("name field is required"),
    check("status").notEmpty().withMessage("status field is required"),
]

const Edit = [
    check("name").notEmpty().withMessage("name field is required"),
    check("status").notEmpty().withMessage("status field is required"),
]

module.exports = { Add, Edit }