var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

/* GET home page. */
 router.get('/', function(req, res, next) {

  res.render('reset', { title:'reset',infos:req.query.user_id,err:'' });
  // console.log(req.query.name);
});


router.post('/',function(req,res,next){
  if(req.body.password == req.body.password2){
    db.user.update({user_id:req.body.user_id}, {$set: {"password": req.body.password}}, function (err) {
      assert.equal(err,null);
      res.redirect('login_cg');
    });
  }else {
    res.render('reset', { title:'reset',infos:req.body.user_id,err:'两次输入密码不同,请重新输入' });
  }
console.log(req.body);
})

module.exports = router;
