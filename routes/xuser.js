var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/',function(req,res,next){
  req.session.admin  = req.query.admin
//查询问题
    db.question_list.find({user_id:req.query.user_id},function(err,doc){
      assert.equal(err,null);
        res.render('xuser',{title:'admin',admin:req.session.admin,infos:doc});
    });
});
module.exports = router;
