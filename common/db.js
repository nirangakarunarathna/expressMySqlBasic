"user strict";

const mysql = require("mysql2");

// local mysql db connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Test@1234",
  database: "shop",
  multipleStatements: true,
});

connection.connect(function (err) {
  if (err) throw err;
  else console.log("DB Connected");
});

module.exports = connection;
