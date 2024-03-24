const retCode = require('../constants/retcode')

const jwt = require('jsonwebtoken')

class LoginController {
  async endMdwLogin(ctx, next) {
    // 拿到上个中间件复制的数据
    const { id, userName, roleId } = ctx.user
    // 生成token
    let payload = { id, userName }
    let secret = 'huangziwei'
    let token = jwt.sign(payload, secret, { expiresIn: 60 * 60 * 24 }) //24小时授权
    // 返回数据
    ctx.body = retCode.Success
    ctx.body.data = { id, roleId, userName, token }
  }
  async endMdwToken(ctx, next) {
    ctx.body = '登陆成功'
  }
}

module.exports = new LoginController()
