var express = require('express');
var router = express.Router();
var path = require('path');
var markdown = require('../module/markdown');
var config = require('../module/config');
var fs = require('fs');
var testGenerator = require('../module/testgenerator');

/* GET practice page. */
router.get('/', function(req, res, next) {
    res.render('practice', { title: 'Gyakorló feladatok' });
});

/* GET one practice page. */
router.get('/:path/:week/:fname', function(req, res, next) {
    // Path of files.
    var filePath = path.join(
        config.vars.dirname,
        config.testRoot,
        req.params.path,
        req.params.week,
        req.params.fname);

    testGenerator.generate(filePath, (html, testjs, content) => {
        res.render('onepractice', {
            content: html,
            testjs: testjs,
            testContent: content
        });
    });
});

module.exports = router;