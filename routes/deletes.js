var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/',function(req,res,next){
  req.session.admin  = req.query.admin
  //删除管理员
  if(req.query.b == 1){
    db.admin.remove({_id:req.query._id},function(err, result){
     assert.equal(null,err);
     db.admin.find({},function(err,doc){
       assert.equal(err,null);
       res.render('manager',{title:'admin',admin:req.session.admin,infos:doc});
     });
    });
  }
  //删除用户
  if(req.query.b == 2){
    db.user.remove({_id:req.query._id},function(err, result){
     assert.equal(null,err);
     db.user.find({},function(err,doc){
       assert.equal(err,null);
       res.render('adminuser',{title:'admin',admin:req.session.admin,infos:doc});
     });
    });
  }
  //删除问题
  if(req.query.b == 3){
    db.question_list.remove({_id:req.query._id},function(err, result){
     assert.equal(null,err);
     db.question_list.find({user_id:req.query.user_id},function(err,doc){
       assert.equal(err,null);
         res.render('xuser',{title:'admin',admin:req.session.admin,infos:doc});
     });
    });
  }
  //删除回答
  if(req.query.b == 4){
    db.problem_details.remove({_id:req.query._id},function(err, result){
     assert.equal(null,err);
     db.problem_details.find({user_id:req.query.user_id},function(err,doc){
       assert.equal(err,null);
         res.render('duser',{title:'admin',admin:req.session.admin,infos:doc});
     });
    });
  }

});


module.exports = router;
