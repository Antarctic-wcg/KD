var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

/* GET home page. */
router.post('/',(req,res) =>{
  var id = req.session.info_user._id;
  db.user.updateOne({_id : id},
    {$set:req.body},
    (err,result) =>{
      res.redirect('show_zy?xiu=1');
    });
});

router.get('/', function(req, res) {
  doc = req.session.info_user;
    res.render('show_zy',{info : doc});
});

module.exports = router;
