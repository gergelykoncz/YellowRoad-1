'use strict';

var async = require('async');
var exec = require('child_process').exec;

var commands = ['elso', 'masodik', 'harmadik'];

var testFn = (command) => {
    console.log(command);
};

async.series([
    (callback) => {
        let cmd = 'git add --all';
        exec(cmd, function(error, stdout, stderr) {
            if (error) {
                callback(error);
            } else {
                callback(null, 'add ok');
            }
        });
    },
    (callback) => {
        let cmd = 'git commit --all -m "auto commit"';
        exec(cmd, function(error, stdout, stderr) {
            if (error) {
                callback(error);
            } else {
                callback(null, 'commit ok');
            }
        });
    },
    (callback) => {
        let cmd = 'git push';
        exec(cmd, function(error, stdout, stderr) {
            if (error) {
                callback(error);
            } else {
                callback(null, 'push ok');
            }
        });
    }
]);

// async.map(commands, testFn, function(err, results){
//     console.log(results);
// });

// async.eachSeries(commands, function iteratee(item, callback) {
//     async.setImmediate(function () {
//         callback(null, item);
//     });
// });