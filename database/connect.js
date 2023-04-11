const mongoose = require("mongoose")

const DB_URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "mongodb://127.0.0.1:27017/zaki" : "mongodb+srv://admin:admin@cluster0.avixwfy.mongodb.net/zaki"

function Connect(){    

    return mongoose.connect(DB_URL)
    
    .then(() => {
        console.log("db start")

    }).catch(err => { reject(err) })

}


module.exports = Connect     