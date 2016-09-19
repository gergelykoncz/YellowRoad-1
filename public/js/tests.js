// Set vars.
var alertTemplate = $('.alert-tepmlate');
var alertContainer = $('.qunit-results');

// Set title.
$('.page-header h1 .title')
    .html(
        $('.row .description h1').html() + ' '
    );

function doTest() {
    // Get editor value.
    var currentEditorValue = mirrorEditor.getValue();

    // Flush alerts.
    alertContainer.html('');
    eval(currentEditorValue);

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

    // Scroll to solution.
    var scrollTimeout = setTimeout(function(){
        clearTimeout(scrollTimeout);
        var p = $('h3.solution').offset();
        window.scrollTo(0, (p.top - 10));
    }, 500);
});

// Show message for students.
function showModalMessage(message, title) {
    var modal = $('#messageModal');

    if (message) {
        modal
            .find('.modal-body')
            .html(message);
    }

    if (title) {
        modal 
            .find('.modal-title')
            .html(title)
    }
        
    modal.modal('show');
}