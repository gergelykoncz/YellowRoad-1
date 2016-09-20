'use strict';
var path = require('path');
var markdown = require('./markdown');
var config = require('./config');
var fs = require('fs');
var async = require('async');

// Check .json.
var checkJson = (filePath, callback) => {
    fs.readFile(filePath+'.json', 'utf8', (err, json) => {
        if (err) {
            callback(err, {files: {}});
        } else {
            json = JSON.parse(json);
            if (json.files) {
                for (var k in json.files) {
                    json.files[k] = path.join(
                                    config.vars.dirname,
                                    config.testRoot,
                                    json.files[k]
                                ); 
                }
            } else {
                json.files = {};
            }
            callback(false, json);
        }
    });
};

// Get markdown and change to html.
var getMarkdown = (filePath, callback) => {
    filePath = checkExtension(filePath, 'md');
    markdown.convert(filePath, (html) => {
        callback(false, html);
    });
};

// Get js files, combine and change to final.
var getJs = (filePath, callback) => {
    filePath = checkExtension(filePath, 'js');
    var testFile = fs.readFileSync(
            path.join(config.vars.dirname, 'public/js/tests.js'),
            'utf8');
    var tests = fs.readFileSync(filePath, 'utf8');
    var testjs = testFile
                    .replace(/\@tests/, tests)
                    .replace(
                        /\/\/ \#/g,
                        'if (window.isFailed){return;}'
                    );
    callback(false, testjs);
};

// Get predefined content from js file.
var getContent = (filePath, callback) => {
    filePath = checkExtension(filePath, 'js');
    fs.readFile(filePath, 'utf8', (err, content) => {
        callback(err, content);
    });
};

// Check file extension.
var checkExtension = (filePath, ext) => {
    if (filePath.split('.').pop().toLowerCase() !== ext) {
        filePath += '.'+ext;
    }
    return filePath;
};

// Start generating.
var generate = (filePath, callBackFn) => {
    checkJson(filePath, (err, json) => {
        let asyncObject = {
            html: (callback) => {
                getMarkdown(json.files.html || filePath, callback);
            },
            testjs: (callback) => {
                getJs(json.files.js || filePath, callback);
            }
        };

        if (json.files.content) {
            asyncObject.content = (callback) => {
                getContent(json.files.content, callback);
            }
        }

        async.parallel(
            asyncObject,
            (err, result) => {
                callBackFn(result.html, result.testjs, result.content || '');
            }
        );
    });
};

module.exports = {
    generate: generate
};