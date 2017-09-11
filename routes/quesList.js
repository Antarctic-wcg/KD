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
  db.question_list.find().sort({'_id': -1}).exec(function(err, doc) {
    if(err) console.log(err);
    res.render('quesList', { title: '知晓' ,name: req.session.name, data: doc, moment: moment});
  });

  if(req.query.user_label) {
  db.question_list.find({user_label: req.query.user_label}).sort({'_id': -1}).exec(function(err, doc) {
    res.render('quesList', { title: '知晓',　name: req.session.name, data: doc, moment: moment});
  });
}

});

module.exports = router;
