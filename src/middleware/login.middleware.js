const md5password = require('../utils/password-handle')
const service = require('../service/login.service')

const vertifyLogin = async (ctx, next) => {
  // 1.获取用户名和密码
  const { userName, password } = ctx.request.body
  // 2.判断用户名或者密码不能空
  if (!userName || !password) {
    ctx.body = {}
    ctx.body.code = 0
    ctx.body.msg = '账号或者密码不能为空'
    return
  }
  // 3.判断这次登录的用户名是否存在
  const result = await service.getUserByUserName(userName)
  if (!result[0]) {
    ctx.body = {}
    ctx.body.code = 0
    ctx.body.msg = '用户不存在'
    return
  }

  if (md5password(password) !== result[0].password) {
    ctx.body = {}
    ctx.body.code = 0
    ctx.body.msg = '密码错误'
    return
  }
  ctx.user = result[0]
  await next()
}

module.exports = { vertifyLogin }
