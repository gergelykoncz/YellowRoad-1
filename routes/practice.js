var express = require('express');
var router = express.Router();

/* GET practice page. */
router.get('/', function(req, res, next) {
  res.render('practice', { title: 'Gyakorló feladatok' });
});

/* GET one practice page. */
router.get('/:id', function(req, res, next) {
  console.log('onepractice');
  res.render('onepractice');
});

module.exports = router;
