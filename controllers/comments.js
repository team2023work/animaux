const CommentsService = require("../services/comments")
const codes = require("../common/codes");


// get comment
const Get = (req, res) => {
    const { sort, limit, skip, filter, expend, q } = req.query

    CommentsService.Get(sort, limit, skip, filter, expend, q).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}
 
// add comment
const Add = (req, res) => {
    const { content , userId , postId } = req.body

    CommentsService.Add(content , userId , postId).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

// edit comment
const Edit = (req, res) => {
    const { id , content } = req.body

    CommentsService.Edit(id, content).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

// remove comment
const Remove = (req, res) => {
    const { id } = req.body

    CommentsService.Remove(id).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}


module.exports = { Get , Add , Remove , Edit }