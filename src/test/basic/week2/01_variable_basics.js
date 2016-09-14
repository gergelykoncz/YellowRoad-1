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
        training === 99,
        "A training változó értéke 99?"
    );
});

// #