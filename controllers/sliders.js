const slidersService = require("../services/sliders")
const codes = require("../common/codes");


// get slider
const Get = (req, res) => {
    const { sort, limit, skip, filter, expend, q  } = req.query

    slidersService.Get(sort, limit, skip, filter, expend, q ).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}
 
// add slider
const Add = (req, res) => {
    const { title, description ,visible, postId, image } = req.body

    slidersService.Add(title, description ,visible, postId, image).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

// edit slider
const Edit = (req, res) => {
    const { title, description ,visible, postId, image } = req.body
    const { id } = req.params

    slidersService.Edit(id, title, description ,visible, postId, image).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

// remove slider
const Remove = (req, res) => {
    const { id } = req.params

    slidersService.Remove(id).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

module.exports = { Get , Add , Remove , Edit }