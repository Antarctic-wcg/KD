var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('alogin', { title: 'Admin',name_err:'',password_err:'',name:req.session.name || '' });
});

router.post('/',function(req,res){
  // console.log(req.body.admin_id);
  db.admin.findOne({admin_id:req.body.admin_id},function(err,doc){
    // console.log(doc);


    if(doc !== null){
      // console.log("ok");
      if(doc.password === req.body.password){
        req.session.admin = doc.admin_id;
        console.log(doc);
        db.user.findOne({},function(er,info){
          req.session.password = doc.password;
          assert.equal(er,null);
          // console.log(req.session.info_,req.session.info);
          // res.render('index', { title: 'Admin' });
          res.render('admin', {title: 'admin',admin: req.session.admin });
        });
      }else{
        res.render('alogin', { title: 'Admin',name_err:'',password_err:'密码错误' });
      }
    }else {
      res.render('alogin', { title: 'Admin',name_err:'用户名不存在!',password_err:'' });
    }
  })
});


module.exports = router;
