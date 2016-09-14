var markdown = require( "markdown" ).markdown;
var fs = require('fs');

var convert = (fileName, callBackFn) => {
    var content = fs.readFileSync(fileName, 'utf8');
    var html = markdown.toHTML(content);
    callBackFn(html);
};

module.exports = {
    convert: convert
};