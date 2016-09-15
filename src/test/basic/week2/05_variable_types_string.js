QUnit.test( "Változó ellenőrzése: szoveg", function( assert ) {
    assert.equal(
        false,
        typeof szoveg === 'undefined',
        "A szoveg változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: szoveg", function( assert ) {
    assert.ok(
        szoveg === "Hello Training360! Ahol jó lenni, ahol jó tanulni.",
        "A szoveg változó értéke helyesen felül lett definiálva?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: szovegTipus", function( assert ) {
    assert.equal(
        false,
        typeof szovegTipus === 'undefined',
        "A szovegTipus változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: szovegTipus", function( assert ) {
    assert.ok(
        szovegTipus === "string",
        "A szovegTipus változó értéke helyes?"
    );
});

// #

QUnit.test("Használat ellenőrzése: typeof", function( assert ) {
    assert.ok(
        currentEditorValue.indexOf('typeof') > -1,
        "Használva volt a typeof függvény?"
    );
});
