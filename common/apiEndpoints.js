const Host = {
    ROOT: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "http://localhost:3005" : "https://zaki-06qu.onrender.com",
    PREFIX: "/v1/api",
    FRONTEND: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "",
  }
  
  const ApiEndpoints = {  

      Users: {
          route: `${Host.PREFIX}/users`,
          list: `/list`,
          login: `/login`,
          signup: `/signup`,
          forgot: `/forgot`,
          me: `/me`,
          edit: `/edit/:id`,
          confirm: `/confirm/:id`,
          reset: `/reset/:id`,
      },

      Admins: {
          route: `${Host.PREFIX}/admins`,
          list: `/list`,
          login: `/login`,
          create: `/create`,
          forgot: `/forgot`,
          me: `/me`,
          edit: `/edit/:id`,
          reset: `/reset/:id`,
      },


      Categories: {
          route: `${Host.PREFIX}/categories`,
          list: `/list`,
          create: `/create`,
          edit: `/edit/:id`,
          delete: `/delete/:id`,
      },

      
      Sliders: {
        route: `${Host.PREFIX}/sliders`,
        list: `/list`,
        create: `/create`,
        edit: `/edit/:id`,
        delete: `/delete/:id`,
    },

      Notifications: {
          route: `${Host.PREFIX}/notifications`,
          list: `/list`,
          create: `/create`,
      },

      Posts: {
          route: `${Host.PREFIX}/posts`,
          list: `/list`,
          create: `/create`,
          edit: `/edit/:id`,
          signal: `/signal/:id`,
      },

      Media: {
          route: `${Host.PREFIX}/media`,
          view: `/view/:id`,
          create: `/create`,
      },

  
};
  
module.exports = {ApiEndpoints , Host}