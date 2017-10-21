var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.user.find({},function(err,doc){
    res.json(doc);
  })
});

module.exports = router;
