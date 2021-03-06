const express = require('express')
const routes = express.Router()

const HomeController = require('../app/controllers/HomeController')

const products = require('./products')
const users = require('./users')


//Home
routes.get('/', HomeController.index)

//Products
routes.use('/products', products)

//Users
routes.use('/users', users)

//Alias
routes.get('/ads/create', (req, res) => {
    return res.redirect("/products/create")
})

routes.get('/accounts', (req, res) => {
    return res.redirect("/users/login")
})

module.exports = routes