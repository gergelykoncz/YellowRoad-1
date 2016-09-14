QUnit.test( "Változó Létezése", function( assert ) {
    assert.equal(
        false,
        typeof training === 'undefined',
        "A training változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése", function( assert ) {
    assert.ok(
        training === 33,
        "A training változó értéke 33?"
    );
});