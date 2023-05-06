const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "user"
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "post"
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



module.exports = mongoose.model("comment", CommentSchema)