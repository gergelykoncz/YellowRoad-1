// Set vars.
var alertTemplate = $('.alert-tepmlate');
var alertContainer = $('.qunit-results');

// Set title.
$('.page-header h1 .title')
    .html(
        $('.row .description h1').html() + ' '
    );

function doTest() {
    // Flush alerts.
    alertContainer.html('');
    eval(mirrorEditor.getValue());

    @tests

}

QUnit.log(function(details){
    // console.log(details);
    if (!details.result) {
        window.isFailed = true;
        var errorMessage = alertTemplate.clone();
        errorMessage
            .addClass('alert-danger')
            .find('.title')
            .html('Hiba: ')
            .parent()
            .find('.message')
            .html(details.message)
            .parent()
            .find('.glyphicon')
            .addClass('glyphicon-exclamation-sign')
            .parent()
            .appendTo(alertContainer);
    } else {
        window.isFailed = false;
        var errorMessage = alertTemplate.clone();
        errorMessage
            .addClass('alert-success')
            .find('.title')
            .html('Helyes: ')
            .parent()
            .find('.message')
            .html(details.message)
            .parent()
            .find('.glyphicon')
            .addClass('glyphicon-ok')
            .parent()
            .appendTo(alertContainer);
    }
});