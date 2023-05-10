const mongoose = require("mongoose")

const CategorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true, 
        trim: true,
        unique: true,
    }, 

    description: {
        type: String,
        required: false, 
        trim: true,
    }, 
    visible: {
        type: Boolean,
        required: true,
        trim: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "post"
    },

    image: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "media"
    },


    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
})


module.exports = mongoose.model("slider", CategorySchema)