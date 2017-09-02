var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('aregister', { title: "添加管理员"});
});

router.post('/', function(req, res, next){
  console.log(req.body);
  var admin = new db.admin(req.body);
  admin.save(function(err, resulte){
    assert.equal(null, err);
    res.redirect('/');
  })
});




module.exports = router;
