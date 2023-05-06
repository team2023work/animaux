const LikesService = require("../services/likes")
const codes = require("../common/codes");


// get like
const Get = (req, res) => {
    const { sort, limit, skip, filter, expend, q } = req.query

    LikesService.Get(sort, limit, skip, filter, expend, q).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}
 
// add like
const Add = (req, res) => {
    const { userId , postId } = req.body
 
    LikesService.Add(userId , postId).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}


// remove like
const Remove = (req, res) => {
    const { id } = req.body

    LikesService.Remove(id).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

module.exports = { Get , Add , Remove }