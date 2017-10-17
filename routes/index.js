var express = require('express');
var router = express.Router();
var db = require('../db');
 var assert = require('assert');
 var moment = require('moment-timezone');
/* GET home page. */
router.get('/', function(req, res) {
  console.log(456);
  var str = req.session.name  || '';
  db.question_list.find({},function(err,data){
    assert.equal(err,null);

    res.render('index', { title: 'KD',name : str,data:data,moment:moment,page:1});
  }).sort({'user_time':-1}).skip(0).limit(5);
});
router.get('/:page',function(req,res){
  var str = req.session.name  || '';
  var limit = 5;
  var skip = parseInt(req.params.page)*limit;
  db.question_list.find({},function(err,data){
    assert.equal(err,null);
    res.render('index', { title: 'KD',name : str,data:data,moment:moment,page:parseInt(req.params.page)});
  }).sort({'user_time':-1}).skip(skip).limit(limit);
})

module.exports = router;
