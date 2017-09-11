var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('input_cg', { title: '个人用户注册',rem:'' });
});

router.post('/', function(req, res, next){
  console.log(req.body);
  var user = new db.user(req.body);
  db.user.findOne({user_id: req.body.user_id}, function(err, doc){
    if(doc){
      res.render('input_cg', { title:'个人用户注册',rem: '账号已存在' });
    }else{
      user.save(function(err, resulte){
        assert.equal(err, null);
        res.redirect('login_cg');
      });

    }
  });
})

module.exports = router;
