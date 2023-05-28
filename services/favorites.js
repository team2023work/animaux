const FavoritesModel = require("../models/favorites")
const { OC, FC } = require("../common/getChecker")


// get Favorite
const Get = ($sort, $limit, $skip, $filter, $expend ) => {

    return new Promise((resolve, reject) => { // get Favorite
 
      
        $expend =
        $expend === "all" ? [{ path: 'user', model: 'user'}, { path: 'post', model: 'post' }] :
        $expend
        
        
        FavoritesModel.find(FC($filter), {}, OC($skip, null, $sort)).populate($expend)
         .then(Favorites => {
 
             resolve({ sort: $sort, skip: $skip, limit: $limit, value: Favorites.slice(0, $limit), count: Favorites.length })

         }).catch(err => {
             console.log(err)
 
             reject(err)
         })

    })
}


// add Favorite
const Add = (user, post) => {

    return new Promise((resolve, reject) => { // check Favorite

        const newFavorite = new FavoritesModel({ user, post })

        newFavorite.save()
            .then(doc => { resolve(doc["_id"]) })
            .catch(err => { reject(err) })
    })
}


// remove Favorite  
const Remove = (id) => {

    return new Promise((resolve, reject) => { // update Favorite

        // check id
        FavoritesModel.findByIdAndDelete({}).where("_id").equals(id)
            .then(Favorite => {

                //check res here
                if (!Favorite) {
                    reject("did not match any document")
                } else {
                    resolve("removed")
                }
            }).catch(err => { reject(err) })

    })

}



module.exports = { Get , Add , Remove }