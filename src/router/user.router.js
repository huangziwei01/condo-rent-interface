const Router = require('koa-router')

const { vertifyUser, handleUser } = require('../middleware/register.middleware')

const { create } = require('../controller/user.controller')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/register', vertifyUser, handleUser, create)

module.exports = userRouter
