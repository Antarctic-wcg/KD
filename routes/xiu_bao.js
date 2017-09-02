var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/', function(req, res) {
  doc = req.session.info_user;
    res.render('',{info : doc});
});

router.post('/',(req,res) =>{
  db.user.updateOne({_id : req.session.id},
    {$set:{answer : req.body.answer}},
    (err,result) =>{
    assert.equal(err,null);
    res.redirect('show_zy');
  });
});
module.exports = router;
