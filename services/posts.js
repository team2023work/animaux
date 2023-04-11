const PostsModel = require("../models/posts")
const { OC, FC } = require("../common/getChecker")
 

// get post
const Get = (sort, limit, skip, filter, expend) => {

    return new Promise((resolve, reject) => { // get post
 

        expend =
        expend === "categoriesId" ? { path: 'categoriesId', model: "category" } :
        expend === "userId" ? { path: 'userId', model: "user" } :
        expend === "user-avatar" ? { path: 'userId', model: "user", populate: { path: 'avatar', model: 'media' }} :
     
        expend === "all" ? [
            { path: 'categoriesId', model: "category"},
            { path: 'user-avatar', model: "media", populate: { path: 'avatar', model: 'media' } },
        ] : null

        PostsModel.find(FC(filter), {} , OC(skip, limit, sort) ).populate(expend)
        .then(posts => {

            if (posts.length <= 0) {
                reject("there are no posts")
            }else{
                resolve({ sort, skip, limit, value: posts })

            }

        }).catch(err => { reject(err) })

    })
}


// add post
const Add = (title, desc, phone, address, gender, image, categoriesId, userId, status, visible) => {
    
    return new Promise((resolve, reject) => { // check post


        const newPost = new PostsModel({ title, desc, phone, address, gender, image, categoriesId, userId, status, visible })

        newPost.save()
            .then(doc => { resolve(doc["_id"]) })
            .catch(err => { reject(err) })
    })
}

// edit post
const Edit = (id, title, desc, phone, address, gender, image, categoriesId, userId, status, visible) => {

    return new Promise((resolve, reject) => { // update post

        // check id
        PostsModel.findByIdAndUpdate({},
            { title, desc, phone, address, gender, image, categoriesId, userId, status, visible, updatedAt: Date.now() }
        ).where("_id").equals(id)
            .then(post => {

                if (!post) {
                    reject("did not match any document")
                } else {
                    resolve("modified")
                }
            }).catch(err => { reject(err) })

    })
}



// signal post  
const Signal = (id) => {

    return new Promise((resolve, reject) => { // update post

        // check id
        PostsModel.findByIdAndUpdate({}, { $inc: { copySignal: 1 } }).where("_id").equals(id)
            .then(post => {

                //check res here
                if (!post) {
                    reject("did not match any document")
                } else {
                    resolve("copied")
                }
            }).catch(err => { reject(err) })

    })

}


module.exports = { Get, Add, Edit, Signal }