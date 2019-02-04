const mysql = require("mysql");
const express = require("express");
// const routes = require("routes");

const app = express();
let connection;

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  db = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "notetaker_db"
  });
}

db.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected");
});

module.exports = db;