QUnit.test( "Változó Létezése", function( assert ) {
    assert.equal(
        false,
        typeof User === 'undefined',
        "A User objektum létezik és van értéke?"
    );
});

// #

QUnit.test( "Objektum értékek vizsgálata", function( assert ) {
    assert.ok(
        User.name === 'Balázs' && 
        User.age === 22 && 
        User.address === 'Budapest' && 
        User.isActive === true, 
        "A User objektum tulajdonságai helyesek?"
    );
});

// #

QUnit.test( "Objektum age tulajdonság", function( assert ) {
    assert.equal(
        false,
        typeof User.age === 'undefined',
        "A User objektum tulajdonságai megfelelnek az adott specifikációnak?"
    );
});

// #

QUnit.test( "Objektum kulcsok helyes használata", function( assert ) {
    assert.ok(
        /.*User\.name[ ]*\=[ ]*[\'\"]Balázs[\'\"].*/.test(currentEditorValue) && 
        /.*User\.age[ ]*\=[ ]*22.*/.test(currentEditorValue),
        "Felül definiálásnál szabályosan használta az objektum kulcsokat?"
    );
});

// #

showModalMessage('<h4>A megoldásod helyes.</h4>', 'Gratulálok');