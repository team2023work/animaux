const mediaService = require("../services/media")
const codes = require("../common/codes");
const fs = require("fs")

//create Media
const createMedia = (req, res) => {
    const { filename } = req.file
    const { type } = req.body

    mediaService.createMedia(filename , type)
    .then(result => { res.status(codes.ok).json({ err: false, msg: result }) })
    .catch(err => res.status(codes.badRequest).json({ err: true, msg: err?.message || err }))
}



//get Media
const getMedia = (req , res) => {
    const { id } = req.params

    mediaService.getMedia(id).then(result => {
        
        fs.readFile(`./images/${result._id}`, function (err, data) {
            if (err) res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
            else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' })
                res.end(data)
            }
        })

    }).catch(err => res.status(codes.badRequest).json({ err: true, msg: err?.message || err }))
}



module.exports = { createMedia , getMedia }