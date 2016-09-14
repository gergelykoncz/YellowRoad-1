QUnit.test( "Változó Létezése", function( assert ) {
    assert.equal(
        false,
        typeof User === 'undefined',
        "A User változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Objektum name tulajdonság", function( assert ) {
    assert.equal(
        false,
        typeof User.name === 'undefined',
        "A User objektumnak van name tulajdonsága?"
    );
});

// #

QUnit.test( "Objektum age tulajdonság", function( assert ) {
    assert.equal(
        false,
        typeof User.age === 'undefined',
        "A User objektumnak van age tulajdonsága?"
    );
});

// #

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