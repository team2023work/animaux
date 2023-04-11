const PostsService = require("../services/posts")
const codes = require("../common/codes");
 
  
// get post
const Get = (req, res) => {
    const { sort, limit, skip, filter, expend } = req.query

    PostsService.Get(sort, limit, skip, filter, expend).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}


// add post
const Add = (req, res) => {
    const { title, desc, phone, address, gender, image, categoriesId, userId, status, visible } = req.body

    PostsService.Add(title, desc, phone, address, gender, image, categoriesId, userId, status, visible).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

// edit post
const Edit = (req, res) => {
    const { title, desc, phone, address, gender, image, categoriesId, userId, status, visible} = req.body
    const { id } = req.params
    
    PostsService.Edit(id , title, desc, phone, address, gender, image, categoriesId, userId, status, visible).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}



// signal post
const Signal = (req, res) => {
    const { id  } = req.params

    PostsService.Signal(id).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}





module.exports = { Get, Add, Edit, Signal }