const FC = filter => {
    return filter ? JSON.parse(filter) : {}
}

const OC = (skip, limit, sort) => {
     let options = {}

     skip && (options.skip = skip)
     limit && (options.limit = limit)
     sort && (options.sort = JSON.parse(sort))

     return options
}




module.exports = { FC , OC }