var io = require('../bin/www');
var db = require('../db');
var assert = require('assert');

var socket = io.socket.sockets.on('connection',function(so){
  so.on('dianzan',function(data){
      // data.data +=1;
      // so.emit('value',{data:data});
      console.log(data.val);
      db.problem_details.updateOne({_id: data.id},{$set: {total: data.val} }, function(err, result){
        assert.equal(err, null);
        // res.redirect('/show');
      })

      db.problem_details.updateOne({_id: data.id},{$push: {like: data.name} }, function(err, result){
        assert.equal(err, null);
        // res.redirect('/show');
      })
    })
})
module.exports = socket;
