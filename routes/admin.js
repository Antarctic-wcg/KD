var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/',function(req,res,next){

    db.user.find({},function(err,doc){
      assert.equal(err,null);
      console.log(doc);
      res.render('admin',{title:'Express',infos:doc});
    });

    // db.user.find({_id:req.query._id},function(err,user){
    //   assert.equal(err,null);
    //   console.log(user);
    //   res.render('admin',{title:'Express',infos:user});
    // });

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
