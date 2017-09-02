var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // console.log(req.session.name);
  var str = req.session.name  || '';
  res.render('index', { title: 'Express',name : str});
});

module.exports = router;
