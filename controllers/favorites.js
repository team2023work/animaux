const FavoritesService = require("../services/favorites")
const codes = require("../common/codes");

 
// get favorite 
const Get = (req, res) => {
    const { $sort, $limit, $skip, $filter, $expend} = req.query

    FavoritesService.Get($sort, $limit, $skip, $filter, $expend).then(result => {
        res.status(codes.ok).json({ result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}
 
// add favorite
const Add = (req, res) => {
    const { user , post } = req.body
 
    FavoritesService.Add(user , post).then(result => {
        res.status(codes.ok).json({ result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}


// remove favorite
const Remove = (req, res) => {
    const { id } = req.params

    FavoritesService.Remove(id).then(result => {
        res.status(codes.ok).json({ result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

module.exports = { Get , Add , Remove }