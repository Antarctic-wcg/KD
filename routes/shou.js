var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');

/* GET home page. */
router.get('/:id', function(req, res) {
  db.user.find({_id : req.params.id},(err,doc) =>{
    assert.equal(err,null);
    req.session.ifo =  doc;
    res.render('show_zy',{info : doc});
  });
});

router.get('/', function(req, res) {
    var doc = {
      name : 'zhangsan',
      sex : '女',
      email : '31132465@asdf.com',
      phone : 12345649879,
      profile : 'asfas卡到了房间 阿拉卡积分按时交付的离开阿里山的风景拉斯加啦'
  }
    res.render('show_zy',{info : doc});
});


module.exports = router;
