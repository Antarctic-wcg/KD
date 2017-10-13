var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');

/* GET home page. */
router.get('/:id', function(req, res) {
  db.user.find({_id : req.params.id},(err,doc) =>{
    assert.equal(err,null);
    res.render('show_zy',{info : doc});
  });
});

router.get('/', function(req, res) {
    var doc = req.session.info_user;
    res.render('show_zy',{info : doc});
});


module.exports = router;
