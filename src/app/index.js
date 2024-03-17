const Koa = require('koa')
const app = new Koa()

const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const errorHandler = require('../app/error-handle')
const useRouter = require('../router')

app.use(bodyParser())
app.use(cors())

app.useRouter = useRouter //为了整体好看

app.useRouter()

app.on('error', (err, ctx) => {
  errorHandler(err, ctx)
})

module.exports = app
