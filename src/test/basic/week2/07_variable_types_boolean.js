QUnit.test( "Változó ellenőrzése: active", function( assert ) {
    assert.equal(
        false,
        typeof active === 'undefined',
        "A active változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: active", function( assert ) {
    assert.ok(
        active === true,
        "A active változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: hourly", function( assert ) {
    assert.equal(
        false,
        typeof hourly === 'undefined',
        "A hourly változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: hourly", function( assert ) {
    assert.ok(
        hourly === 4,
        "A hourly változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: spent", function( assert ) {
    assert.equal(
        false,
        typeof spent === 'undefined',
        "A spent változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: spent", function( assert ) {
    assert.ok(
        spent === true,
        "A spent változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: type", function( assert ) {
    assert.equal(
        false,
        typeof type === 'undefined',
        "A type változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: type", function( assert ) {
    assert.ok(
        type === "boolean",
        "A type változó értéke helyes?"
    );
});

// #

QUnit.test("Használat ellenőrzése: logikai kifejezés", function( assert ) {
    assert.ok(
        /.*active.*\&\&.*hourly.*\>.*2.*/.test(currentEditorValue) && 
        currentEditorValue.indexOf('typeof') > -1,
        "Használva volt logikai kifejezés?"
    );
});

// #

showModalMessage('<h4>A megoldásod helyes.</h4>', 'Gratulálok');