const CommentsModel = require("../models/comments")
const { OC, FC } = require("../common/getChecker")
 
 
// get comment
const Get = (sort, limit, skip, filter, expend, q ) => {

    return new Promise((resolve, reject) => { // get comment

        expend =
        expend === "all" ? [{ path: 'userId', model: 'user'}, { path: 'postId', model: 'post' }] :
        expend === "user" ? { path: 'userId', model: 'user'} :
        expend === "post" ? { path: 'postId', model: 'post' } : null

        CommentsModel.find(FC(filter), {}, OC(skip, limit, sort)).populate("userId")
            .then(comments => {

                resolve({ sort, skip, limit, value: comments, count: comments.length })

            }).catch(err => {
                console.log(err)

                reject(err)
            })

    })
} 


// add comment
const Add = (content, userId, postId) => {

    return new Promise((resolve, reject) => { // check comment

        const newComment = new CommentsModel({ content, userId, postId })

        newComment.save()
            .then(doc => { resolve(doc["_id"]) })
            .catch(err => { reject(err) })

    })
}


// edit comment
const Edit = (id, content) => {

    return new Promise((resolve, reject) => { // update comment

        // check id
        CommentsModel.findByIdAndUpdate({}, { content , updatedAt: Date.now() }).where("_id").equals(id)
            .then(comment => {

                if (!comment) {
                    reject("id not exist")
                } else {
                    resolve("modified")
                }
            }).catch(err => { reject(err) })

    })
}


// remove comment  
const Remove = (id) => {

    return new Promise((resolve, reject) => { // update comment

        // check id
        CommentsModel.findByIdAndDelete({}).where("_id").equals(id)
            .then(comment => {

                //check res here
                if (!comment) {
                    reject("id not exist")
                } else {
                    resolve("removed")
                }
            }).catch(err => { reject(err) })

    })

}


module.exports = { Get , Add , Remove , Edit }