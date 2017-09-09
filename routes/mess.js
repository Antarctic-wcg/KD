var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');
/* GET home page. */
router.get('/', function(req, res) {
  var value = req.session.name || '';
  res.render('mess', { title: '问题发布',name:value});
  // console.log(value);
});

router.post('/',function(req,res){
  // console.log(req.body);
  req.body.user_time =  new Date(Date.now() + (8 * 60 * 60 * 1000));
  var user = new db.question_list(req.body);
  user.save(function(err,resulte){
    assert.equal(null,err);
    res.redirect('/quesList');
  });

});

module.exports = router;
