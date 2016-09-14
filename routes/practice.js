var express = require('express');
var router = express.Router();
var path = require('path');
var markdown = require('../module/markdown');
var config = require('../module/config');

/* GET practice page. */
router.get('/', function(req, res, next) {
    res.render('practice', { title: 'Gyakorló feladatok' });
});

/* GET one practice page. */
router.get('/:path/:week/:fname', function(req, res, next) {
    var fileName = path.join(
        config.vars.dirname,
        config.testRoot,
        req.params.path,
        req.params.week,
        req.params.fname) + '.md';
    console.log(fileName);
    markdown.convert(fileName, (html) => {
        res.render('onepractice', {
            content: html
        });        
    });
});

module.exports = router;