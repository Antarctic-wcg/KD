var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('show_zy');
});
module.exports = router;
