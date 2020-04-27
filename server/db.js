
// 数据库连接配置
module.exports = {
    mysql:{
        host: '192.168.1.39',  // 新建数据库连接时的 主机名或ID地址 内容
        user: 'zc0',
        password: 'zhongche123', // root 密码
        database: 'FLATCAR_20181213', // 数据库名
        port: '3306'
    }
}


// const mysqlConfig = {
//   host: '192.168.1.39',  // 新建数据库连接时的 主机名或ID地址 内容
//   user: 'root',
//   password: 'zhongche123', // root 密码
//   database: 'dev', // 数据库名
//   port: '3306'
// }
// const pool = mysql.createPool({
//   host: mysqlConfig.host,
//   user: mysqlConfig.user,
//   password: mysqlConfig.password,
//   database: mysqlConfig.database,
//   port: mysqlConfig.port,
//   multipleStatements: true    // 多语句查询
// });

// // var setValue = function() {
// //   pool.getConnection((err, connection) => {
// //     var sql = 'INSERT INTO us_user(id, login_name) VALUES (1, "admin")'
// //     connection.query(sql, (err, result) => {
// //         console.log(result);
// //         connection.release();
// //     })
// //   })
// // }

// // setValue();

// // 查询数据，？ 的值填入 connection.jquery 的第二个参数（数组）中
// // WHERE id = ? AND name = ? ---> connetion.query(sql, [1, "blog"], () => )
// var getValue = function() {
//   pool.getConnection((err, connection) => {
//     var sql = 'SELECT * FROM us_user WHERE id = 1'
//     connection.query(sql, [1], (err, result) => {
//         console.log(result);
//         connection.release();
//     })
//   })
// }
// getValue();
