const Koa = require('koa')
const app = new Koa()

// 添加一个简单的中间件
app.use(async (ctx) => {
  ctx.body = 'Hello, Koa2!'
})

module.exports = app
