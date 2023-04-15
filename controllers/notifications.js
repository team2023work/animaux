const notificationsService = require("../services/notifications")
const codes = require("../common/codes");


// get notification
const Get = (req, res) => {
    const { sort, limit, skip, filter, expend } = req.query

    notificationsService.Get(sort, limit, skip, filter, expend).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}
 
// add notification
const Add = (req, res) => {
    const { title, description, postId } = req.body

    notificationsService.Add(title, description, postId).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

module.exports = { Get , Add }