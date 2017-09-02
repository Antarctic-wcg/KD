var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');

/* GET home page. */
router.get('/', function(req, res) {

  var name = req.session.name || '';
  var doc = req.session.info_user;
  res.render('show_zy',{info : doc,name:name});
});

module.exports = router;
