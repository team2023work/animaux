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
        required: true, 
        trim: true,
    }, 
    visible: {
        type: String,
        required: true,
        trim: true,
    },
    postId: {
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