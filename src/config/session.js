const session = require('express-session')
const pgSession = require('connect-pg-simple')(session)
const db = require('./db')

module.exports = session({
    store: new pgSession({
        pool: db
    }),
    secret: 'iabadabaduuuuu',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 2592000000
    }
})