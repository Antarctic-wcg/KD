var express = require('express');
var router = express.Router();
var db = require('../db/index.js');
var assert = require('assert');
var db = require('../db');
var moment = require('moment');

var assert = require('assert');

/* GET home page. */
/* GET home page. */
router.get('/', function(req, res, next) {
  if(typeof (req.session.name) === 'undefined'){
    req.session.name = null;
  }
  console.log(".......",db.question_list.find({}));
  db.question_list.find().sort({'_id': -1}).exec(function(err, doc) {
    if(err) console.log(err);
    console.log(doc);
    res.render('quesList', { title: 'TodoList' ,name: req.session.name, data: doc, moment: moment});
  });

});

module.exports = router;
