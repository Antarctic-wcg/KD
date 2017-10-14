var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/',function(req,res){

  var json = {'name':'lzc','age':'22'};
  res.json(json);
})
module.exprots = router;
