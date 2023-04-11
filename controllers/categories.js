const categoriesService = require("../services/categories")
const codes = require("../common/codes");


// get category
const Get = (req, res) => {
    const { sort, limit, skip, filter } = req.query

    categoriesService.Get(sort, limit, skip, filter).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}
 
// add category
const Add = (req, res) => {
    const { name , status } = req.body

    categoriesService.Add(name , status).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err || err })
    })
}

// edit category
const Edit = (req, res) => {
    const { name , status } = req.body
    const { id } = req.params

    categoriesService.Edit(id, name , status).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

// remove category
const Remove = (req, res) => {
    const { id } = req.params

    categoriesService.Remove(id).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

module.exports = { Get , Add , Remove , Edit }