const { check } = require('express-validator')

const Add = [
    check("title").notEmpty().withMessage("title field is required"),
    check("desc").notEmpty().withMessage("desc field is required"),
    check("phone").notEmpty().withMessage("phone field is required"),
    check("address").notEmpty().withMessage("address field is required"),
    check("gender").notEmpty().withMessage("gender field is required"),
    check("image").notEmpty().withMessage("image field is required"),
    check("categoriesId").notEmpty().withMessage("categoriesId field is required"),
    check("userId").notEmpty().withMessage("userId field is required"),
    check("status").notEmpty().withMessage("status field is required"),
    check("visible").notEmpty().withMessage("visible field is required"),
]

const Edit = [
    check("title").notEmpty().withMessage("title field is required"),
    check("desc").notEmpty().withMessage("desc field is required"),
    check("phone").notEmpty().withMessage("phone field is required"),
    check("address").notEmpty().withMessage("address field is required"),
    check("gender").notEmpty().withMessage("gender field is required"),
    check("image").notEmpty().withMessage("image field is required"),
    check("categoriesId").notEmpty().withMessage("categoriesId field is required"),
    check("userId").notEmpty().withMessage("userId field is required"),
    check("status").notEmpty().withMessage("status field is required"),
    check("visible").notEmpty().withMessage("visible field is required"),
]


module.exports = { Add, Edit }