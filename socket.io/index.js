var io = require('../bin/www');
var socket = io.socket.sockets.on('connection',function(so){
  so.on('dianzan',function(data){
      data.data +=1;
      so.emit('value',{data:data})
    })
})
module.exports = socket;
