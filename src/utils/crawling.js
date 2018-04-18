let Twit = require("twit");
let filter = require("./filter");

let mysql = require("mysql");
let config = require("./apiKey");
let target = require("./target");
let count = require("./count");

let {
  bts,
  exo,
  got7,
  wannaone,
  bap,
  gfriend,
  twice,
  redvelvet,
  apink,
  mamamoo
} = require("./count");

let T = new Twit(config);
let stream = T.stream("statuses/filter", target);

let connection = mysql.createConnection({
  // mysql 서버접속
  // host: '159.65.4.130',
  // user: 'root',
  // database: 'idols2',
  // password: 'admin'
  host: "localhost",
  user: "root",
  password: "",
  database: "idols2"
});

connection.connect(err => {
  // mysql 서버상태 확인
  if (err) {
    throw err;
  }
});

stream.on("tweet", filter); // filter에 따라 카운트될 때마다 count값 증가

setInterval(function() {
  for (let i in bts) {
    connection.query("update people set count=" + bts[i] + " where id=" + i);
  }
  for (let i in exo) {
    connection.query("update people set count=" + exo[i] + " where id=" + i);
  }
  for (let i in got7) {
    connection.query("update people set count=" + got7[i] + " where id=" + i);
  }
  for (let i in wannaone) {
    connection.query(
      "update people set count=" + wannaone[i] + " where id=" + i
    );
  }
  for (let i in bap) {
    connection.query("update people set count=" + bap[i] + " where id=" + i);
  }
  for (let i in gfriend) {
    connection.query(
      "update people set count=" + gfriend[i] + " where id=" + i
    );
  }
  for (let i in twice) {
    connection.query("update people set count=" + twice[i] + " where id=" + i);
  }
  for (let i in redvelvet) {
    connection.query(
      "update people set count=" + redvelvet[i] + " where id=" + i
    );
  }
  for (let i in apink) {
    connection.query("update people set count=" + apink[i] + " where id=" + i);
  }
  for (let i in mamamoo) {
    connection.query(
      "update people set count=" + mamamoo[i] + " where id=" + i
    );
  }
}, 10000);
