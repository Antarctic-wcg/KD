var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');
var moment = require('moment');
var io = require('../bin/www');
// var socket = require('../socket')
/* GET home page. */

router.get('/', function(req, res) {
  var name = req.session.name || null;
  var did = req.session.info_user._id || null;
  // console.log(id);
  // console.log(name);
  // var name = 'lisi';
  var id = req.query.id;
  // console.log('get', id);
  db.question_list.findOne({_id: id }, function(err, doc){
    assert.equal(err, null);
    // console.log(socket);
    db.problem_details.find({user_id: id }, function(err, result){
      // console.log(doc);
      assert.equal(err, null);
      // console.log(result);
      console.log(123,io.socket.sockets);
      var socket;
      console.log(io.socket);
      io.socket.sockets.on('connection',function(so){
        console.log(so);
        console.log('socket');
        so.on('dianzan',function(data){
            console.log(data);
            data.data +=1;
            console.log(data);
            so.emit('value',{data:data})
          })

      })

      res.render('show-xq', { title: '问题详情',doc: doc ,result: result ,moment: moment, name: name, did: did});
    }).sort({_id: -1});
  })

});

// socket.io.on('new', function(msg){
//   console.log(data);
// })

router.post('/', function(req, res) {
  // var name = req.session.name;
  console.log(req.body);
  var id = req.body.user_id;
  console.log('post', id);
  req.body.time =  new Date(Date.now() + (8 * 60 * 60 * 1000));
  console.log(req.body);
  var pd = new db.problem_details(req.body);
  console.log(pd);
  pd.save(function(err, result){
    assert.equal(err,null);
    res.redirect('/show-xq?id='+id);
  })

router.post('/:id',function(req, res){
  console.log(req.params.id);
})


});

module.exports = router;
