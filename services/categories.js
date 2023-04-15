const categoriesModel = require("../models/categories")
const { OC, FC } = require("../common/getChecker")
 
// get category
const Get = (sort, limit, skip, filter) => {

    return new Promise((resolve, reject) => { // get category


        categoriesModel.find(FC(filter), {},OC(skip, limit, sort))
            .then(categories => {

                if (categories.length <= 0) {
                    reject("there are no categories")
                }else{

                    resolve({ sort, skip, limit, value: categories, count: categories.length })
                }

            }).catch(err => {   reject(err) })
            
    })
}
 

// add category
const Add = (name, visible, description) => {

    return new Promise((resolve, reject) => { // check category

        categoriesModel.findOne({}).where("name").equals(name).then(category => {

            if (category) {
                reject("the category already exists")
            } else {

                const newCategory = new categoriesModel({ name, visible, description })

                newCategory.save()
                    .then(doc => { resolve(doc["_id"]) })
                    .catch(err => { reject(err) })

            }
        }).catch(err => { reject(err) })


    })
}


// edit category
const Edit = (id , name , visible, description) => {

    return new Promise((resolve, reject) => { // update category

        // check id
        categoriesModel.findByIdAndUpdate({}, { name, visible, description, updatedAt: Date.now() }).where("_id").equals(id)
            .then(category => {

                if (!category) {
                    reject("did not match any document")
                } else {
                    resolve("modified")
                }
            }).catch(err => { reject(err) })

    })
}


// remove category  
const Remove = (id) => {

    return new Promise((resolve, reject) => { // update category

        // check id
        categoriesModel.findByIdAndDelete({}).where("_id").equals(id)
            .then(category => {

                //check res here
                if (!category) {
                    reject("did not match any document")
                } else {
                    resolve("removed")
                }
            }).catch(err => { reject(err) })

    })

}



module.exports = { Get , Add , Remove , Edit }