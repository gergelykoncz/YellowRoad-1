'use strict';

var async = require('async');
var exec = require('child_process').exec;

var commands = ['elso', 'masodik', 'harmadik'];

var testFn = (command) => {
    console.log(command);
};

var startSync = () => {
    async.series([
        (callback) => {
            let cmd = 'git add --all';
            exec(cmd, function(error, stdout, stderr) {
                if (error) {
                    console.error('Error: ' + stdout);
                    callback(error);
                } else {
                    console.log('Done: ' + stdout);
                    callback(null, 'add ok');
                }
            });
        },
        (callback) => {
            let cmd = 'git commit --all -m "auto commit"';
            exec(cmd, function(error, stdout, stderr) {
                if (error) {
                    console.error('Error: ' + stdout);
                    callback(error);
                } else {
                    console.log('Done: ' + stdout);
                    callback(null, 'commit ok');
                }
            });
        },
        (callback) => {
            let cmd = 'git push';
            exec(cmd, function(error, stdout, stderr) {
                if (error) {
                    console.error('Error: ' + stdout);
                    callback(error);
                } else {
                    console.log('Done: ' + stdout);
                    callback(null, 'push ok');
                }
            });
        }
    ]);
};

setInterval(startSync, (5*60*1000));