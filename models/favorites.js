const mongoose = require("mongoose")

const FavoriteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "user"
    },
    post: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "post"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model("favorite", FavoriteSchema)