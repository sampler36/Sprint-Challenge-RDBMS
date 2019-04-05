// config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './projectTracker.sqlite3'
    },
    migrations:{
      directory:'./data/migrations'
     },
     seeds:{
       directory:'./data/seeds'
     },
     useNullAsDefault: true
  },

};
