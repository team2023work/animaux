const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true, 
    },
    email: { 
        type: String,
        required: true,
        trim: true,
        unique : true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },

    phone: {
        type: String,
        required: false,
        trim: true, 
    },

    avatar: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref : "media"
    },

    address: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },

    isEmailVerified: {
        type: Boolean,
        default: false
    } ,
    isAccountSuspended: {
        type: Boolean,
        default: false
    }
})
 

// hash Password
UserSchema.methods.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

// compare Password
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.models.user ||  mongoose.model("user", UserSchema)