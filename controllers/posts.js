const PostsService = require("../services/posts")
const codes = require("../common/codes");
 
  
// get post
const Get = (req, res) => {
    const { $sort, $limit, $skip, $filter, $expend, $q, $longitude, $latitude  } = req.query

    PostsService.Get($sort, $limit, $skip, $filter, $expend, $q, $longitude, $latitude ).then(result => {
        res.status(codes.ok).json({ result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

  
// get Statistics
const Statistics = (req, res) => {

    PostsService.Statistics().then(result => {
        res.status(codes.ok).json({ result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}



// add post
const Add = (req, res) => {
    const { title, description, phone, address, gender, image, category, user, status, visible, localisation, price, lostDate } = req.body

    PostsService.Add(title, description, phone, address, gender, image, category, user, status, visible, localisation, price, lostDate ).then(result => {
        res.status(codes.ok).json({ result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

// edit post
const Edit = (req, res) => {
    const { title, description, phone, address, gender, image, category, user, status, visible, localisation, price, lostDate } = req.body
    const { id } = req.params
    
    PostsService.Edit(id , title, description, phone, address, gender, image, category, user, status, visible, localisation, price, lostDate ).then(result => {
        res.status(codes.ok).json({ result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}



// signal post
const Signal = (req, res) => {
    const { id  } = req.params

    PostsService.Signal(id).then(result => {
        res.status(codes.ok).json({ result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}





module.exports = { Get, Add, Edit, Signal, Statistics }