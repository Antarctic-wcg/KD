var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/',function(req,res,next){
  req.session.admin  = req.query.admin
//查询管理员
  if(req.query.b == 1){
    db.admin.find({_id:req.query._id},function(err,doc){
      assert.equal(err,null);
        res.render('admin_revise',{title:'admin',admin:req.session.admin,infos:doc[0],err:"请输入要修改信息"});
    });
  }
//查询用户
  if(req.query.b == 2){
    db.user.find({_id:req.query._id},function(err,doc){
      assert.equal(err,null);
        res.render('user_revise',{title:'admin',admin:req.session.admin,infos:doc[0],err:"请输入要修改信息"});
    });
  }
});

router.post('/',function(req,res,next){
  //修改管理员
if(req.body.b == 1){
  db.admin.find({admin_id:req.body.admin_id},function(err,doc){
    assert.equal(err,null);
    if(doc.length != 0 && req.body.name != req.body.admin_id){
      req.session.admin  = req.body.admin
      db.admin.find({_id:req.body._id},function(err,info){
        assert.equal(err,null);
        res.render('admin_revise',{title:'admin',admin:req.session.admin,infos:info[0],err:"已有用户名,修改失败"});
      });
    }else {
      db.admin.update({_id:req.body._id}, {$set: req.body}, function (err) {
        assert.equal(err,null);
        if(req.body.name != req.body.admin){
          req.session.admin = req.body.admin
        }else {
          req.session.admin = req.body.admin_id
        }
        db.admin.find({},function(err,doc){
          assert.equal(err,null);
          res.render('manager',{title:'admin',admin:req.session.admin,infos:doc});
        });

      });
    }
  });
}


//修改用户
if(req.body.b == 2){

  db.user.find({user_id:req.body.user_id},function(err,doc){
    assert.equal(err,null);
    req.session.admin  = req.body.admin
    if(doc.length != 0 && req.body.username != req.body.user_id){
      db.user.find({_id:req.body._id},function(err,info){
        assert.equal(err,null);
        res.render('user_revise',{title:'admin',admin:req.session.admin,infos:info[0],err:"已有用户名,修改失败"});
      });
    }else {
      db.user.update({_id:req.body._id}, {$set: req.body}, function (err) {
        assert.equal(err,null);
        db.user.find({},function(err,doc){
          assert.equal(err,null);
          res.render('adminuser',{title:'admin',admin:req.session.admin,infos:doc});
        });

      });
    }
  });
}

});
module.exports = router;
