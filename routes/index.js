var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bagel', function(req, res, next) {
  res.render('bagel', { title: 'Bagel City Gang!' });
});

module.exports = router;
