const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const Connect = require("./database/connect")
const { ApiEndpoints, Host } = require("./common/apiEndpoints")

//env file
require("dotenv").config()

//database initialize
Connect()


//development
if (app.get("env") == "development") {
    app.use(morgan("dev"))
}

const corsOptions = { origin : `${Host.FRONTEND}`}  

//decoded data
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors(corsOptions))


const users = require("./routers/users")
const media = require("./routers/media")
const admins = require("./routers/admins")
const categories = require("./routers/categories")
const posts = require("./routers/posts")
const sliders = require("./routers/sliders")
const notifications = require("./routers/notifications")

app.use(ApiEndpoints.Users.route, users)
app.use(ApiEndpoints.Media.route, media)
app.use(ApiEndpoints.Admins.route, admins)
app.use(ApiEndpoints.Categories.route, categories)
app.use(ApiEndpoints.Posts.route, posts)
app.use(ApiEndpoints.Sliders.route, sliders)
app.use(ApiEndpoints.Notifications.route, notifications)

app.use((req, res, next) => {
    res.status(404).json("Api not found") 
})

app.listen(process.env.PORT || 3005 , () => {
    console.log("server start")
})