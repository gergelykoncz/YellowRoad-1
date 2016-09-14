var alertTemplate = $('.alert-tepmlate');
var alertContainer = $('.qunit-results');

function doTest() {
    // Flush alerts.
    alertContainer.html('');
    eval(mirrorEditor.getValue());

    QUnit.test( "Változó Létezése", function( assert ) {
        assert.equal(
            false,
            typeof User === 'undefined',
            "A User változó létezik és van értéke?"
        );
    });

    if (window.isFailed) {
        return;
    }

    QUnit.test( "Objektum name tulajdonság", function( assert ) {
        assert.equal(
            false,
            typeof User.name === 'undefined',
            "A User objektumnak van name tulajdonsága?"
        );
    });

    if (window.isFailed) {
        return;
    }

    QUnit.test( "Objektum age tulajdonság", function( assert ) {
        assert.equal(
            false,
            typeof User.age === 'undefined',
            "A User objektumnak van age tulajdonsága?"
        );
    });

    if (window.isFailed) {
        return;
    }

    QUnit.test( "Objektum Tulajdonságok", function( assert ) {
        var testUser = {
            name: 'Joe',
            age: 35
        };

        assert.deepEqual(
            testUser,
            User,
            "Az objektum tulajdonságok értékei megfelelnek az adott specifikációnak?"
        );
    });
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