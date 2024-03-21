const Koa = require('koa')
const app = new Koa()

// 将这些请求体中的数据解析为 JavaScript 对象
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// 允许跨域请求
const cors = require('koa2-cors')
app.use(cors())

//错误统一处理
const errorHandler = require('../app/error-handle')

const useRouter = require('../router')
app.useRouter = useRouter //为了整体好看

app.useRouter()

app.on('error', (err, ctx) => {
  errorHandler(err, ctx)
})

module.exports = app
