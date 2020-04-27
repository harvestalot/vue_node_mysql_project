const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});

module.exports = {
  getValue(req, res, next) {
    var id = req.query.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getValue;
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setValue(req, res, next) {
    console.log(req.body);
    var login_name = req.body.login_name, password = req.body.password;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setValue;
      connection.query(sql, [login_name, password], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  updateValue(req, res, next) {
    var id = req.body.id, login_name = req.body.login_name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.updateValue;
      connection.query(sql, [login_name, id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
}
