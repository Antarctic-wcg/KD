var express = require('express');
var router = express.Router();
var db = require('../db');
 var assert = require('assert');
 var moment = require('moment');
/* GET home page. */
router.get('/', function(req, res) {
  // console.log(req.session.name);
  var str = req.session.name  || '';
  db.question_list.find({},function(err,data){
    assert.equal(err,null);
    res.render('index', { title: 'Express',name : str,data:data,moment:moment});
  }).sort({'user_time':-1})
});

module.exports = router;
