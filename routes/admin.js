var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/',function(req,res,next){
  req.session.admin  = req.query.admin
    if(req.query.a == 1){
      res.render('admin',{title:'admin',admin:req.session.admin});
    }
    if(req.query.a == 2){
      db.user.find({},function(err,doc){
        assert.equal(err,null);
        res.render('adminuser',{title:'admin',admin:req.session.admin,infos:doc});
      });
    }
    if(req.query.a == 3){
      db.admin.find({},function(err,doc){
        assert.equal(err,null);
        res.render('manager',{title:'admin',admin:req.session.admin,infos:doc});
      });
    }


});


module.exports = router;
