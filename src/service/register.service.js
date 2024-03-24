const connection = require('../app/database')

class RegisterService {
  // 获取用户信息
  async getUserByUserName(userName) {
    const statement = `SELECT * FROM user WHERE userName = ?;`
    const [result] = await connection.execute(statement, [userName])
    return result
  }
}

module.exports = new RegisterService()
