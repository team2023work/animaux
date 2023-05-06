const LikesModel = require("../models/likes")
const { OC, FC } = require("../common/getChecker")


// get like
const Get = (sort, limit, skip, filter, expend, q ) => {

    return new Promise((resolve, reject) => { // get like
 
      
        expend =
        expend === "all" ? [{ path: 'userId', model: 'user'}, { path: 'postId', model: 'post' }] :
        expend === "user" ? { path: 'userId', model: 'user'} :
        expend === "post" ? { path: 'postId', model: 'post' } : null
        
        
        LikesModel.find(FC(filter), {}, OC(skip, limit, sort)).populate(expend)
         .then(likes => {
 
             resolve({ sort, skip, limit, value: likes, count: likes.length })

         }).catch(err => {
             console.log(err)
 
             reject(err)
         })

    })
}


// add like
const Add = (userId, postId) => {

    return new Promise((resolve, reject) => { // check like

        const newLike = new LikesModel({ userId, postId })

        newLike.save()
            .then(doc => { resolve(doc["_id"]) })
            .catch(err => { reject(err) })
    })
}


// remove like  
const Remove = (id) => {

    return new Promise((resolve, reject) => { // update like

        // check id
        LikesModel.findByIdAndDelete({}).where("_id").equals(id)
            .then(like => {

                //check res here
                if (!like) {
                    reject("id not exist")
                } else {
                    resolve("removed")
                }
            }).catch(err => { reject(err) })

    })

}



module.exports = { Get , Add , Remove }