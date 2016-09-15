QUnit.test( "Változó ellenőrzése: kerdes1", function( assert ) {
    assert.equal(
        false,
        typeof kerdes1 === 'undefined',
        "A kerdes1 változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: kerdes1", function( assert ) {
    assert.ok(
        kerdes1 === "Hány kutya tud",
        "A kerdes1 változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: kerdes2", function( assert ) {
    assert.equal(
        false,
        typeof kerdes2 === 'undefined',
        "A kerdes2 változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: kerdes2", function( assert ) {
    assert.ok(
        kerdes2 === " becsavarni egy villanykörtét?",
        "A kerdes2 változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: kerdes", function( assert ) {
    assert.equal(
        false,
        typeof kerdes === 'undefined',
        "A kerdes változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: kerdes", function( assert ) {
    assert.ok(
        kerdes === "Hány kutya tud becsavarni egy villanykörtét?",
        "A kerdes változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: valasz1", function( assert ) {
    assert.equal(
        false,
        typeof valasz1 === 'undefined',
        "A valasz1 változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: valasz1", function( assert ) {
    assert.ok(
        valasz1 === "Ha kialszik a villany eltünnek!",
        "A valasz1 változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: valasz2", function( assert ) {
    assert.equal(
        false,
        typeof valasz2 === 'undefined',
        "A valasz2 változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: valasz2", function( assert ) {
    assert.ok(
        valasz2 === "NEM TUDJUK!",
        "A valasz2 változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: vicc", function( assert ) {
    assert.equal(
        false,
        typeof vicc === 'undefined',
        "A vicc változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: vicc", function( assert ) {
    var testVicc = vicc.replace(/ /g, '');
    console.log(testVicc);
    assert.ok(
        testVicc === "Hánycsótánytudbecsavarniegyvillanykörtét?NEMTUDJUK!Hakialszikavillanyeltünnek!",
        "A vicc változó értéke helyes?"
    );
});

// #

QUnit.test("Használat ellenőrzése: metódusok", function( assert ) {
    assert.ok(
        currentEditorValue.indexOf('.toUpperCase(') > -1 && 
        currentEditorValue.indexOf('.concat(') > -1,
        "Használva volt a concat és a toUpperCase metódus?"
    );
});

// #

showModalMessage('<h4>'+vicc+'</h4>', 'Gratulálok, itt a vicced');