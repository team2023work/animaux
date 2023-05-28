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
        ref : "media",
        default: "64355651eba58341e6576b33"
    },

    address: {
        type: String,
        required: true,
        trim: true,
    },

    localisation: {
        type: { type: String },
        coordinates: [],

        // type: {
        //     longitude: {
        //         type: String,
        //         required: true,
        //         trim: true,
        //     },
        //     latitude: {
        //         type: String,
        //         required: true,
        //         trim: true,
        //     }
        // },
        // required: true,
        // trim: true,
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
    isAccountActivated: {
        type: Boolean,
        default: true
    }
})
 
// create Index
UserSchema.index({ "localisation" : "2dsphere" })

// hash Password
UserSchema.methods.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

// compare Password
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model("user", UserSchema)