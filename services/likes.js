const LikesModel = require("../models/likes")
const { OC, FC } = require("../common/getChecker")


// get like
const Get = ($sort, $limit, $skip, $filter, $expend ) => {

    return new Promise((resolve, reject) => { // get like
 
      
        $expend =
        $expend === "all" ? [{ path: 'user', model: 'user'}, { path: 'post', model: 'post' }] :
        $expend
        
        
        LikesModel.find(FC($filter), {}, OC($skip, $limit, $sort)).populate($expend)
         .then(likes => {
 
             resolve({ sort: $sort, skip: $skip, limit: $limit, value: likes, count: likes.length })

         }).catch(err => {
             console.log(err)
 
             reject(err)
         })

    })
}


// add like
const Add = (user, post) => {

    return new Promise((resolve, reject) => { // check like

        const newLike = new LikesModel({ user, post })

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
                    reject("did not match any document")
                } else {
                    resolve("removed")
                }
            }).catch(err => { reject(err) })

    })

}



module.exports = { Get , Add , Remove }