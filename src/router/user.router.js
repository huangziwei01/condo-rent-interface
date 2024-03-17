const Router = require('koa-router')

const { vertifyUser, handleUser } = require('../middleware/register.middleware')

const userRouter = new Router({ prefix: '/users' })

userRouter.post('/register', vertifyUser, handleUser, create)
