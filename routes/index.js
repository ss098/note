var express = require('express');
var router = express.Router();
var Note = require("../models/note.js");

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var note = Note.find({"_id": ObjectId(req.params.id)});
  res.end(note);
  //res.render('index', { title: '深沉的情书与你' });
});

module.exports = router;
