const FC = filter => {
    return filter ? JSON.parse(filter) : {}
}

const QC = (s, q) => {

    const adminFilter = { fullname, email }
    const userFilter = { fullname, email, phone, address }
    const postFilter = { fullname, email }
    const categoryFilter = { fullname, email }
    const likeFilter = { fullname, email}
    const commentFilter = { fullname, email }
    const sliderFilter = { fullname, email }
    const notificationFilter = { title, description }



    return q ? q && s === "admin" : {}
}

const OC = (skip, limit, sort) => {
     let options = {}

     skip && (options.skip = skip)
     limit && (options.limit = limit)
     sort && (options.sort = JSON.parse(sort))

     return options
}




module.exports = { FC , OC }