const { check } = require('express-validator')

const Login = [
    check("email").notEmpty().withMessage("email field is required").email("email field is required"),
    check("password").notEmpty().withMessage("password field is required"),
]


const SignUp = [
    check("fullname").notEmpty().withMessage("fullname field is required"),
    check("email").notEmpty().withMessage("email field is required"),
    check("password").notEmpty().withMessage("password field is required"),
    check("phone").notEmpty().withMessage("phone field is required"),
    check("avatar").notEmpty().withMessage("avatar field is required"),
    check("address").notEmpty().withMessage("address field is required"),
]

const Forgot = [
    check("email").notEmpty().withMessage("email field is required"),
]

const Reset = [
    check("oldPass").notEmpty().withMessage("oldPass field is required"),
    check("newPass").notEmpty().withMessage("newPass field is required"),
]

const Edit = [
    check("fullname").notEmpty().withMessage("fullname field is required"),
    check("email").notEmpty().withMessage("email field is required"),
    check("password").notEmpty().withMessage("password field is required"),
    check("phone").notEmpty().withMessage("phone field is required"),
    check("avatar").notEmpty().withMessage("avatar field is required"),
    check("address").notEmpty().withMessage("address field is required"),
    check("isAccountSuspended").notEmpty().withMessage("isAccountSuspended field is required"),
]


module.exports = { Edit, Login, SignUp, Forgot, Reset }