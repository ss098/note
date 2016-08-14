var express = require('express');
var router = express.Router();
var Note = require("../models/note.js");
var marked = require('marked');
var xss = require("xss");

router.get('/', function(req, res) {
  res.render('create');
});

router.get('/create', function(req, res) {
  res.render('create');
});

router.post('/create', function(req, res) {
  var title = req.body.title;
  var content = req.body.content;
  var password = req.body.password;

  var now = new Date();
  marked(content, function (err, content) {
    Note.create({
      title: title,
      content: xss(content),
      markdown: content,
      password: password,
      date: now.toLocaleDateString()
    }).then(function (document) {
      res.redirect("/" + document._id);
    });
  });
});

/* GET home page. */
router.get('/:id', function(req, res, next) {
  Note.findById(req.params.id, function (err, note) {
    if (note == undefined) {
      var now = new Date();
      res.render('index', {
        "title": "这是一篇空文档",
        "date": now.toLocaleDateString(),
        "content": "这个页面并不存在，请向你分享这个页面的用户联系。"
      });
    } else {
      if (note.password) {
        res.render("password", note);
      } else {
        res.render('index', note);
      }
    }
  });
});

router.post('/:id', function(req, res, next) {
  Note.findById(req.params.id, function (err, note) {
    if (note == undefined) {
      var now = new Date();
      res.render('index', {
        "title": "这是一篇空文档",
        "date": now.toLocaleDateString(),
        "content": "这个页面并不存在，请向你分享这个页面的用户联系。"
      });
    } else {
      if (note.password) {
        if (req.body.password == note.password) {
          res.render('index', note);
        } else {
          res.render("password", note);
        }
      } else {
        res.render('index', note);
      }
    }
  });
});

module.exports = router;
