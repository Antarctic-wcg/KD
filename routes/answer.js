var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');
var moment = require('moment');
/* GET home page. */
router.get('/', function(req, res) {
  var name = req.session.name || '';
          db.user.findOne({_id :req.session.info_user._id },(err,doc) =>{
          db.question_list.find({user_id:doc.user_id},(err,da) =>{
            db.problem_details.find({users_id:doc.user_id},(err,dat) =>{
              db.question_list.find((err,dbc) =>{
                res.render('show_zy',{info : doc,name:name,dbc:dbc,da:da,dat :dat,moment: moment,op : 2});
              })
            });
          });
        });
});
module.exports = router;
