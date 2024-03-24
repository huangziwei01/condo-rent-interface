const connection = require('../app/database')
class LoginService {
  // 查询该名字是否已存在
  async getUserByUserName(userName) {
    const statement = `SELECT * FROM user WHERE userName = ?;`
    const [result] = await connection.execute(statement, [userName])
    return result
  }
}

module.exports = new LoginService()
