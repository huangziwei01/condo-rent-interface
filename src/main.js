const app = require('./app')

const config = require('./app/config')

// 监听端口
const PORT = config.APP_PORT
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
