var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('login_cg', { title: "登录"});
});

router.post('/', function(req, res, next){
  console.log(req.body.user_id,"=================");
  console.log(typeof(req.body.user_id),"-----------------");
  if(req.body.user_id === ""){
    res.end("<div style='width:300px;margin: 0 auto;padding-top:100px;'><h1>用户名为空,<a href='login_cg'>重新登录</a></h1></div>");
  }
  db.user.findOne({user_id:req.body.user_id}, function(err, doc){
    assert.equal(err, null);
    console.log(req.session.name);


    if(doc !== null){
      console.log("1");


      // console.log(doc.password);
      if(req.body.password == doc.password){
        req.session.info_user = doc;
        req.session.name = doc.name;
        res.redirect('/');
      }else{
      res.end("<div style='width:300px;margin: 0 auto;padding-top:100px;'><h1>密码错误,<a href='login_cg'>重新登录</a></h1></div>");
      }
    }else{
      res.end("<div style='width:300px;margin: 0 auto;padding-top:100px;'><h1>用户不存在,<a href='login_cg'>重新登录</a></h1></div>");
    }
  })
})

module.exports = router;
