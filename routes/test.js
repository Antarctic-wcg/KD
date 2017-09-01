


var express = require('express');
var router = express.Router();




 router.get('/', function(req, res){

    console.log(req.session);
    //  req.session.lastPage = '/awesome'; //每一次访问时，session对象的lastPage会自动的保存或更新内存中的session中去。
    //  res.send("You're Awesome. And the session expired time is: " + req.session.cookie.maxAge);
});
module.exports = router;
