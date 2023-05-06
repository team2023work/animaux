const notificationsModel = require("../models/notifications")
const { OC, FC, QC } = require("../common/getChecker")
 
// get notification
const Get = (sort, limit, skip, filter, expend, q ) => {

    return new Promise((resolve, reject) => { // get notification


        notificationsModel.find({ ...QC("notification", q), ...FC(filter) }, {},OC(skip, limit, sort)).populate(expend)
            .then(notifications => {

                resolve({ sort, skip, limit, value: notifications, count: notifications.length })

            }).catch(err => {   reject(err) })
            
    })
}

 
// add notification
const Add = (title, description, postId) => {

    return new Promise((resolve, reject) => { // check notification

                const newnotification = new notificationsModel({ title, description, postId })

                newnotification.save()
                    .then(doc => { resolve(doc["_id"]) })
                    .catch(err => { reject(err) })
  
    })
}





module.exports = { Get , Add }