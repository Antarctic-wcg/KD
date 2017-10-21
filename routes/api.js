var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/',function(req,res){
  db.user.find({},function(err,doc){
    res.json(doc);
  })
})
module.exprots = router;
