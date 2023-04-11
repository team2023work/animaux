const mongoose = require("mongoose")

const DB_URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "mongodb://127.0.0.1:27017/zaki" : ""

function Connect(){      
    return mongoose.connect(DB_URL, (err) => { 
            if (err) throw new Error("db error") 
            console.log("db start") 
    })
 
}


module.exports = Connect     