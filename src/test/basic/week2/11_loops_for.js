QUnit.test( "For ciklus használata", function( assert ) {
    assert.ok(
        /.*for[ ]*\([ ]*var[ ]*[a-z]*[ ]*\=[ ]*0[ ]*\;.*/.test(currentEditorValue),
        "Használtad a for ciklust a megoldáshoz?"
    );
});

// #

QUnit.test( "Tomb indexek használata", function( assert ) {
    assert.ok(
        /.*Users\[.\]\.name[ ]*(\=|\+\=)[ ]*.*/.test(currentEditorValue),
        "Használtál tömb indexeket?"
    );
});

// #

QUnit.test( "Objektum name vizsgálata", function( assert ) {
    var correct = true;
    for (var k in Users) {
        if (Users[k].name.indexOf(' Filpo') === -1) {
            correct = false;
        }
    }
    assert.ok(
        correct, 
        "A Users objektum name tulajdonságai helyesek?"
    );
});

// #

QUnit.test( "Objektum age vizsgálata", function( assert ) {
    assert.ok(
        Users[0].age === 54 && 
        Users[1].age === 21 &&
        Users[2].age === 43 &&
        Users[3].age === 98, 
        "A Users objektum age tulajdonságai helyesek?"
    );
});

// #

QUnit.test( "Objektum isLive vizsgálata", function( assert ) {
    assert.ok(
        Users[0].isLive === true && 
        Users[1].isLive === true &&
        Users[2].isLive === true &&
        Users[3].isLive === false, 
        "A Users objektum isLive tulajdonságai helyesek?"
    );
});

// #

showModalMessage('<h4>A megoldásod helyes.</h4>', 'Gratulálok');