var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/', function(req, res) {
  doc = req.session.info_user;
    res.render('show_zy',{info : doc});
});

router.post('/',(req,res) =>{
  console.log(req.session.info_user.answer,req.body);
  if(req.session.info_user.answer === req.body.answer1){
    if(req.body.answer === req.body.answer2){
      db.user.updateOne({_id : req.session.info_user._id},
        {$set:{answer : req.body.answer}},
        (err,result) =>{
        assert.equal(err,null);
        res.redirect('show_zy?xiu=3');
      });
    }else {
      res.redirect('show_zy?xiu=2bao');
    }
  }else {
    res.redirect('show_zy?xiu=1bao');
  }

});
module.exports = router;
