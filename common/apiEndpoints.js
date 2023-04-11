const Host = {
    ROOT: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "http://localhost:3005" : "",
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
          route: `${Host.PREFIX}/Categories`,
          list: `/list`,
          create: `/create`,
          edit: `/edit/:id`,
          delete: `/delete/:id`,
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