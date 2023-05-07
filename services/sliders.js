const slidersModel = require("../models/sliders")
const { OC, FC, QC } = require("../common/getChecker")
 
// get slider
const Get = (sort, limit, skip, filter, expend, q ) => {

    return new Promise((resolve, reject) => { // get slider


        slidersModel.find({ ...QC("slider", q), ...FC(filter) }, {},OC(skip, limit, sort)).populate(expend)
            .then(sliders => {

             resolve({ sort, skip, limit, value: sliders, count: sliders.length })

            }).catch(err => {   reject(err) })
            
    })
}
 

// add slider
const Add = (title, description ,visible, postId, image) => {

    return new Promise((resolve, reject) => { // check slider

        slidersModel.findOne({}).where("title").equals(title).then(slider => {

            if (slider) {
                reject("the slider already exists")
            } else {

                const newslider = new slidersModel({ title, description ,visible, postId, image })

                newslider.save()
                    .then(doc => { resolve(doc["_id"]) })
                    .catch(err => { reject(err) })

            }
        }).catch(err => { reject(err) })


    })
}


// edit slider
const Edit = (id , title, description ,visible, postId, image) => {

    return new Promise((resolve, reject) => { // update slider

        // check id
        slidersModel.findByIdAndUpdate({}, { title, description ,visible, postId, image, updatedAt: Date.now() }).where("_id").equals(id)
            .then(slider => {

                if (!slider) {
                    reject("did not match any document")
                } else {
                    resolve("modified")
                }
            }).catch(err => { reject(err) })

    })
}


// remove slider  
const Remove = (id) => {

    return new Promise((resolve, reject) => { // update slider

        // check id
        slidersModel.findByIdAndDelete({}).where("_id").equals(id)
            .then(slider => {

                //check res here
                if (!slider) {
                    reject("did not match any document")
                } else {
                    resolve("removed")
                }
            }).catch(err => { reject(err) })

    })

}



module.exports = { Get , Add , Remove , Edit }