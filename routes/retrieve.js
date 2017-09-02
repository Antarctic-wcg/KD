var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user', { title: 'user',infos:' ' });
  // console.log(req.query.name);
});


router.post('/',function(req,res,next){
    db.user.find({user_id:req.body.user_id},function(err,doc){
    assert.equal(err,null);
    console.log(doc);
    if(doc != ''){
      res.render('retrieve',{title:'Retrieve',infos:doc});
    }else {
      res.render('user', {title:'user',infos:'不存在用户'});
    }

  });
});

module.exports = router;
