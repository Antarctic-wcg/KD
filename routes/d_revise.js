var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/',function(req,res,next){
  req.session.admin  = req.query.admin
//查询w回答
    db.problem_details.find({_id:req.query._id},function(err,doc){
      assert.equal(err,null);
        res.render('d_revise',{title:'admin',admin:req.session.admin,infos:doc[0],err:"请输入要修改信息"});
    });
});

router.post('/',function(req,res,next){
  //修改回答
  db.problem_details.update({_id:req.body._id}, {$set:{content:req.body.contents}}, function (err) {
    assert.equal(err,null);
      req.session.admin = req.body.admin
    db.problem_details.find({user_id:req.body.user_id},function(err,doc){
      assert.equal(err,null);
      res.render('duser',{title:'admin',admin:req.session.admin,infos:doc});
    });

  });



});
module.exports = router;
