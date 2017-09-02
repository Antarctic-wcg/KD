var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

/* GET home page. */
router.post('/',(req,res) =>{
  db.user.updateOne({_id : req.query.id},(err,result) =>{
    assert.equal(err,null);
    res.redirect('show_zy');
  });
});

router.get('/', function(req, res) {
  doc = req.session.info_user;
    res.render('show_zy',{info : doc});
});

module.exports = router;
