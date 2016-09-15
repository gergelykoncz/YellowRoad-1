QUnit.test( "Változó ellenőrzése: jobs", function( assert ) {
    assert.equal(
        false,
        typeof jobs === 'undefined',
        "A jobs változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: jobs", function( assert ) {
    console.log(jobs);
    assert.ok(
        jobs[0] === 100 && 
        jobs[1] === 'inspector' && 
        jobs[2] === 'chef' && 
        jobs[3] === true && 
        jobs[4] === 33,
        "A jobs tömb megfelelően lett felül definiálva?"
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
        type === 'boolean',
        "A type változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: sum", function( assert ) {
    assert.equal(
        false,
        typeof sum === 'undefined',
        "A sum változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: sum", function( assert ) {
    assert.ok(
        sum === 3300,
        "A sum változó értéke helyes?"
    );
});

// #

QUnit.test("Használat ellenőrzése: tömb indexek", function( assert ) {
    console.log(currentEditorValue);
    assert.ok(
        /.*jobs\[1\].*\=.*\'inspector\'.*/.test(currentEditorValue) && 
        /.*jobs\[0\].*\=.*100.*/.test(currentEditorValue),
        "Használtak tömb indexeket?"
    );
});

// #

QUnit.test("Használat ellenőrzése: typeof", function( assert ) {
    assert.ok(
        currentEditorValue.indexOf('typeof') > -1,
        "A típust typeof függvénnyel állapították meg?"
    );
});

// #

showModalMessage('<h4>A megoldásod helyes.</h4>', 'Gratulálok');