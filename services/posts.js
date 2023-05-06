const PostsModel = require("../models/posts")
const { OC, FC } = require("../common/getChecker")
 

// get post
const Get = (sort, limit, skip, filter, expend, q ) => {

    return new Promise((resolve, reject) => { // get post
 

        expend =
        expend === "categoriesId" ? { path: 'categoriesId', model: "category" } :
        expend === "userId" ? { path: 'userId', model: "user" } :
     
        expend === "all" ? [
            { path: 'categoriesId', model: "category"},
            { path: 'userId', model: "user" },
        ] : null

        PostsModel.find(FC(filter), {} , OC(skip, limit, sort) ).populate(expend)
        .then(posts => {
            
            resolve({ sort, skip, limit, value: posts, count: posts.length })

        }).catch(err => { reject(err) })

    })
}


// add post
const Add = (title, desc, phone, address, gender, image, categoriesId, userId, status, visible, localisation, price, date ) => {
    
    return new Promise((resolve, reject) => { // check post


        const newPost = new PostsModel({ title, desc, phone, address, gender, image, categoriesId, userId, status, visible, localisation, price, date  })

        newPost.save()
            .then(doc => { resolve(doc["_id"]) })
            .catch(err => { reject(err) })
    })
}

// edit post
const Edit = (id, title, desc, phone, address, gender, image, categoriesId, userId, status, visible, localisation, price, date ) => {

    return new Promise((resolve, reject) => { // update post

        // check id
        PostsModel.findByIdAndUpdate({},
            { title, desc, phone, address, gender, image, categoriesId, userId, status, visible, localisation, price, date , updatedAt: Date.now() }
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
                    resolve("modified")
                }
            }).catch(err => { reject(err) })

    })

}


module.exports = { Get, Add, Edit, Signal }