var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/',function(req,res,next){
  req.session.admin  = req.query.admin
  res.render('admin_add',{title:'admin',admin:req.session.admin,err:''});
});

router.post('/', (req, res, next) => {
  req.session.admin  = req.body.admin

  //添加管理员
  db.admin.find({admin_id:req.body.admin_id},function(err,doc){
    assert.equal(err,null);
    if( doc.length != 0){
      res.render('admin_add',{title:'admin',admin:req.session.admin,err:'已存在管理员,请重新选择'});
    }else {
      var Admin = new db.admin({
        admin_id: req.body.admin_id,
        password: req.body.password,
        jurl: req.body.jurl
      });
      Admin.save((err, data) => {
        db.admin.find({},function(err,doc){
          assert.equal(err,null);
          res.render('manager',{title:'admin',admin:req.session.admin,infos:doc});
        });
      });
    }
  });




});
module.exports = router;
