var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/', function(req, res) {
  doc = req.session.info_user;
    res.render('show_zy',{info : doc});
});

router.post('/',(req,res) =>{
  if(req.session.info_user.password === req.body.pass){
    if(req.body.password === req.body.password1){
      db.user.updateOne(
        {_id : req.session.info_user._id},
        {$set:{password : req.body.password}},
        (err,result) =>{
        assert.equal(err,null);
        res.redirect('show_zy?xiu=2');
      });
    }else{
      res.redirect('show_zy?xiu=2mi');
    }
  }else{
    res.redirect('show_zy?xiu=1mi');
  }
});
module.exports = router;
