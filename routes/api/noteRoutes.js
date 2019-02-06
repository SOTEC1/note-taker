const router = require("express").Router();
const db = require("../../db/connection");

router.get("/", function (req, res) {
  // query database for all notes and send back as json
  db.query("SELECT * FROM notes", function(err, dbRes) {
    if (err) throw err;

    
    res.json(dbRes);
  });
});

router.post("/", function (req, res) {
  // INSERT into database the data coming from req.body
  db.query("INSERT INTO notes SET ?", req.body, function(err, result) {
    if (err) throw err;

    res.json(result);
  });
});

router.delete("/:id", function (req, res) {
  // DELETE from database where id = req.params.id
  db.query("DELETE FROM notes WHERE id = ?", [req.params.id], 
  function(err, result) {
    if (err) throw err;

    res.json(result);
  })
});

module.exports = router; 