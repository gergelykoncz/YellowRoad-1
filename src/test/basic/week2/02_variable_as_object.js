QUnit.test( "Változó ellenőrzése: bevetel", function( assert ) {
    assert.equal(
        false,
        typeof bevetel === 'undefined',
        "A bevetel változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: bevetel", function( assert ) {
    assert.ok(
        bevetel === 10000,
        "A bevetel változó értéke 10000?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: tipus", function( assert ) {
    assert.equal(
        false,
        typeof tipus === 'undefined',
        "A tipus változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: tipus", function( assert ) {
    console.log(tipus);
    assert.ok(
        tipus === 'number',
        "A tipus változó értéke a bevetel változó típusa?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: tipus2", function( assert ) {
    assert.equal(
        false,
        typeof tipus2 === 'undefined',
        "A tipus2 változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: tipus2", function( assert ) {
    console.log(tipus);
    assert.ok(
        tipus2 === 'string',
        "A tipus2 változó értéke a tipus változó típusa?"
    );
});