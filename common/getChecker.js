const FC = filter => {
    return filter ? JSON.parse(filter) : {}
}


const LC = (longitude, latitude) => {
    let localisation = {}

    
    localisation =
        (!!longitude && !!latitude) ? {
            localisation: {
                $near:
                {
                    $geometry: { type: "Point", coordinates: [longitude, latitude] },
                    $minDistance: 0,
                    $maxDistance: 100000
                },

            }
 
        } : localisation

    return !!localisation.$near ? {localisation: localisation.localisation} : {}
}


const QC = (s, q) => {

    const adminFilter = [ "fullname", "email" ]
    const userFilter = [ "fullname", "email", "phone", "address" ]
    const postFilter = [ "title", "desc", "phone", "address", "gender"]
    const categoryFilter = [ "name", "description" ]
    const sliderFilter = [ "title", "description" ]
    const notificationFilter = [ "title", "message" ]      

    let $or = []

    $or =
    (q && s) === "post" ? $or = postFilter.map(key => ({ [key]: { $regex: q, $options: "i" } })) :
    (q && s) === "slider" ? $or = sliderFilter.map(key => ({ [key]: { $regex: q, $options: "i" } })) :
    (q && s) === "category" ? $or = categoryFilter.map(key => ({ [key]: { $regex: q, $options: "i" } })) :
    (q && s) === "notification" ? $or = notificationFilter.map(key => ({ [key]: { $regex: q, $options: "i" } })) :
    (q && s) === "user" ? $or = userFilter.map(key => ({ [key]: { $regex: q, $options: "i" } })) :
    (q && s) === "admin" ? $or = adminFilter.map(key => ({ [key]: { $regex: q, $options: "i" } })) :
    $or


    return !!$or.length ? {$or} : {}
}

const OC = (skip, limit, sort) => {
     let options = {}

     skip && (options.skip = skip)
     limit && (options.limit = limit)
     sort && (options.sort = JSON.parse(sort))

     return options
}




module.exports = { FC , OC , QC, LC }