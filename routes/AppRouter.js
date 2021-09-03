const { Router } = require('express')
const router = require('./Routers')
const AppRouter = Router()

AppRouter.use('/forum', router)

module.exports = AppRouter
