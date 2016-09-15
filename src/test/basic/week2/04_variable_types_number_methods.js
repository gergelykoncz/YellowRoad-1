QUnit.test( "Változó ellenőrzése: alapErtek", function( assert ) {
    assert.equal(
        false,
        typeof alapErtek === 'undefined',
        "A alapErtek változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: alapErtek", function( assert ) {
    assert.ok(
        alapErtek === "11.23",
        "A alapErtek változó értéke helyesen felül lett definiálva?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: eredmeny", function( assert ) {
    assert.equal(
        false,
        typeof eredmeny === 'undefined',
        "A eredmeny változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: eredmeny", function( assert ) {
    assert.ok(
        eredmeny === "11.23",
        "A eredmeny változó értéke helyes?"
    );
});
