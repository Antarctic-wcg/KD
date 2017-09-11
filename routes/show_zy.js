var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res) {
  var name = req.session.name || '';
  var xiu = req.query.xiu || null;
  if(xiu == '2'){
    req.session.info_user = null;
    req.session.name = '';
    res.redirect('/login_cg?xiu=update');
  };
        if(!name){
          res.redirect('/login_cg');
        }else{
          db.user.findOne({_id :req.session.info_user._id },(req,doc) =>{
          db.question_list.find({user_id:doc.user_id},(req,da) =>{
            res.render('show_zy',{info : doc,name:name,xiu : xiu,da :da,moment: moment});
          })
        });
      }
});

  router.get('/xiugai', function(req, res) {
    var name = req.session.name || '';
    var xiu = 1;
            db.user.findOne({_id :req.session.info_user._id },(req,doc) =>{
            res.render('show_zy',{info : doc,name:name,xiu : xiu});
          });
  });

module.exports = router;
