var sqlMap = {
  getValue: 'SELECT * FROM t_user WHERE id = ?',
  updateValue: 'UPDATE t_user SET login_name = ? WHERE id = ?',
  setValue: 'INSERT INTO t_user(login_name,password) VALUES (?,?)',

}

module.exports = sqlMap;
