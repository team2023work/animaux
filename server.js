const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const Connect = require("./database/connect")
// const swaggerUi = require('swagger-ui-express')
// const swaggerDocument = require('./swagger.json')
const { ApiEndpoints, Host } = require("./common/apiEndpoints")

// const options = {
//     swaggerOptions: {
//         authAction: { JWT: { name: "JWT", schema: { type: "apiKey", in: "header", name: "Authorization", description: "Authentication token" }, value: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM1NThmNTE1ODIyODc4YTAwM2NmMWUiLCJmdWxsbmFtZSI6ImthcmltIG1hbnNvdXIiLCJlbWFpbCI6ImRvbi5rYXJpbW1hbnNvdXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkUWZ4dE8uNkFOSE90eTQwYkRDL1lpdVFjclMwcTdLL25KUFppRGFzZGtEYzYzU2VPdGhkT1ciLCJwaG9uZSI6IisyMTI2Mjg0MDAwODAiLCJhdmF0YXIiOiI2NDM1NTZmZTA3YmExNzI3ODY1ZjY1ZDYiLCJhZGRyZXNzIjoic2lkaSBsYXJiaSBiZW4gc2F5ZWggMjkiLCJjcmVhdGVkQXQiOiIyMDIzLTA0LTExVDEyOjU1OjU5LjkxMloiLCJ1cGRhdGVkQXQiOiIyMDIzLTA0LTExVDE0OjI0OjI4LjkxM1oiLCJpc0VtYWlsVmVyaWZpZWQiOnRydWUsImlzQWNjb3VudFN1c3BlbmRlZCI6ZmFsc2UsIl9fdiI6MCwicm9sZSI6InVzZXIiLCJpYXQiOjE2ODE2NTc4NjUsImV4cCI6MTY4MjI2MjY2NX0.Evc50l2aPOlslFX993W3n1H76zTuNSineCuS8w8fINA" } }
//     }
// }
 
//env file
require("dotenv").config()

//database initialize
Connect()


//development
if (app.get("env") == "development") {
    app.use(morgan("dev"))
}

//const corsOptions = { origin : `${Host.FRONTEND}`}  

//decoded data
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//app.use(cors(corsOptions))
app.use(cors())

 
const users = require("./routers/users")
const media = require("./routers/media")
const admins = require("./routers/admins")
const categories = require("./routers/categories")
const posts = require("./routers/posts")
const sliders = require("./routers/sliders")
const notifications = require("./routers/notifications")
const comments = require("./routers/comments")
const likes = require("./routers/likes")

app.use(ApiEndpoints.Users.route, users)
app.use(ApiEndpoints.Media.route, media)
app.use(ApiEndpoints.Admins.route, admins)
app.use(ApiEndpoints.Categories.route, categories)
app.use(ApiEndpoints.Posts.route, posts)
app.use(ApiEndpoints.Sliders.route, sliders)
app.use(ApiEndpoints.Notifications.route, notifications)
app.use(ApiEndpoints.Comments.route, comments)
app.use(ApiEndpoints.Likes.route, likes)

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))

app.use((req, res, next) => {
    res.status(404).json("Api not found") 
})

app.listen(process.env.PORT || 3005 , () => {
    console.log("server start")
})