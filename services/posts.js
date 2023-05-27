const PostsModel = require("../models/posts")
const { OC, FC, QC } = require("../common/getChecker")


// get post
const Get = ($sort, $limit, $skip, $filter, $expend, $q) => {

    return new Promise((resolve, reject) => { // get post

        $expend =
            $expend === "all" ? [
                { path: 'category', model: "category" },
                { path: 'user', model: "user" },
            ] : $expend

        
            PostsModel.find({ ...QC("post", $q), ...FC($filter) }, {}, OC($skip, null, $sort)).populate($expend)
            .then(posts => {

                    resolve({ sort: $sort, skip: $skip, limit: $limit, value: posts.slice(0, $limit), count: posts.length })

            }).catch(err => { reject(err) })

    })
}


// add post
const Add = (title, description, phone, address, gender, image, category, user, status, visible, localisation, price, lostDate) => {

    return new Promise((resolve, reject) => { // check post


        const newPost = new PostsModel({ title, description, phone, address, gender, image, category, user, status, visible, localisation, price, lostDate })

        newPost.save()
            .then(doc => { resolve(doc["_id"]) })
            .catch(err => { reject(err) })
    })
}

// edit post
const Edit = (id, title, description, phone, address, gender, image, category, user, status, visible, localisation, price, lostDate) => {

    return new Promise((resolve, reject) => { // update post

        // check id
        PostsModel.findByIdAndUpdate({},
            { title, description, phone, address, gender, image, category, user, status, visible, localisation, price, lostDate, updatedAt: Date.now() }
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
        PostsModel.findByIdAndUpdate({}, { $inc: { signalCount: 1 } }).where("_id").equals(id)
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