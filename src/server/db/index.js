const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '159.65.4.130',
  user: 'root',
  database: 'idols2',
  password: 'admin'
});

connection.connect(function (err) {
  if (err) {
    console.log('error'); return;
  }
  else {
    console.log('connected');
  }
});

module.exports = connection;