var express = require('express');
var router = express.Router();
var db = require('../db/index.js');
var assert = require('assert');
var db = require('../db');
var moment = require('moment');

var assert = require('assert');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("queslist coming .....");
    console.log("queslist coming .....",req.query.user_label);

    if(req.query.user_label) {
        db.question_list.find({user_label:req.query.user_label}, function(err, doc) {
          assert.equal(err, null);
          res.render('quesList', {title: '提问列表', datas: doc, moment: moment})
        })
    }
    db.question_list.find({}, function(err, doc) {
      assert.equal(err, null);
      console.log(doc);
      var name = req.session.name || '';
      res.render('quesList', { title: '提问列表', datas: doc, moment: moment, name : name });
    })
});

// router.get('/:id',(req,res) =>{
//   console.log(req.params.id);
//       if(req.params.id) {
//         db.question_list.find({user_label:req.params.id}, function(err, doc) {
//           assert.equal(err, null);
//           res.render('quesList', {title: '提问列表', datas: doc, moment: moment})
//         })
//     }
// });
module.exports = router;
