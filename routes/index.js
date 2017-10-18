var express = require('express');
var router = express.Router();
var db = require('../db');
 var assert = require('assert');
 var moment = require('moment-timezone');
/* GET home page. */
function findData(page,skip,limit,res,req){
  db.question_list.find({},function(err,data){
    assert.equal(err,null);
    db.question_list.count({},function(err,count){
      assert.equal(err,null);
      let pageCount = Math.ceil(count/limit);
      res.render('index', { title: 'KD',name : req.session.name  || '',data:data,moment:moment,page:page,pageCount:pageCount});
    });
  }).sort({'user_time':-1}).skip(skip).limit(limit);
};
router.get('/', function(req, res) {
  findData(1,0,5,res,req);
});
router.get('/:page',function(req,res){
  var limit = 5;
  var page = parseInt(req.params.page);
  var skip = parseInt(req.params.page)*limit;
  findData(page,skip,limit,res,req);
})

module.exports = router;
