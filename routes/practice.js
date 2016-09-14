var express = require('express');
var router = express.Router();
var path = require('path');
var markdown = require('../module/markdown');
var config = require('../module/config');
var fs = require('fs');

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

    // Convert .md to html.
    markdown.convert(filePath+'.md', (html) => {
        // Get js file.
        var testFile = fs.readFileSync(
            path.join(config.vars.dirname, 'public/js/tests.js'),
            'utf8');
        var tests = fs.readFileSync(filePath+'.js', 'utf8');
        var testjs = testFile
                        .replace(/\@tests/, tests)
                        .replace(
                            /\/\/ \#/g,
                            'if (window.isFailed){return;}'
                        );

        res.render('onepractice', {
            content: html,
            testjs: testjs
        });        
    });
});

module.exports = router;