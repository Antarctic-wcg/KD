var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/',function(req,res,next){
  req.session.admin  = req.query.admin
//查询问题
    db.question_list.find({_id:req.query._id},function(err,doc){
      assert.equal(err,null);
        res.render('x_revise',{title:'admin',admin:req.session.admin,infos:doc[0],err:"请输入要修改信息"});
    });
});

router.post('/',function(req,res,next){
  //修改问题
  console.log(req.body);
  db.question_list.update({_id:req.body._id}, {$set: req.body}, function (err) {
    assert.equal(err,null);
      req.session.admin = req.body.admin
    db.question_list.find({user_id:req.body.user_id},function(err,doc){
      assert.equal(err,null);
      res.render('xuser',{title:'admin',admin:req.session.admin,infos:doc});
    });

  });



});
module.exports = router;
