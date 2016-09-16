QUnit.test( "Változó ellenőrzése: movie", function( assert ) {
    assert.equal(
        false,
        typeof movie === 'undefined',
        "A movie tömb létezik és van értéke?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: movie[3]", function( assert ) {
    assert.ok(
        Array.isArray(movie[3]),
        "A movie tömb harmadik eleme szintén egy tömb?"
    );
});

// #

QUnit.test( "Értéked ellenőrzése: movie", function( assert ) {
    assert.ok(
        movie[0] === 1 && 
        movie[1] === true && 
        movie[2] === 'Kincs ami van' && 
        movie[4] === 1986,
        "A movie tömb értékei helyesek?"
    );
});

// #

QUnit.test( "Értéked ellenőrzése: beágyazott tömb", function( assert ) {
    assert.ok(
        movie[3][0] === 'map' && 
        movie[3][1] === 'Piedone' &&
        movie[3][2] === 'boat' &&
        movie[3][3] === 'Anulu',
        "A beágyazott tömb értékei helyesek?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: title", function( assert ) {
    assert.equal(
        false,
        typeof title === 'undefined',
        "A title változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: title", function( assert ) {
    assert.ok(
        title === 'Kincs ami nincs',
        "A title változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: year", function( assert ) {
    assert.equal(
        false,
        typeof year === 'undefined',
        "A year változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: year", function( assert ) {
    assert.ok(
        year === 1989,
        "A year változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: classic", function( assert ) {
    assert.equal(
        false,
        typeof classic === 'undefined',
        "A classic változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: classic", function( assert ) {
    assert.ok(
        classic === true,
        "A classic változó értéke helyes?"
    );
});

// #

QUnit.test("Használat ellenőrzése: tömb indexek", function( assert ) {
    console.log(currentEditorValue);
    assert.ok(
        /.*movie\[3\]\[1\].*\=.*\'Piedone\'.*/.test(currentEditorValue) && 
        /.*movie\[3\]\[3\].*\=.*\'Anulu\'.*/.test(currentEditorValue),
        "Használtak tömb indexeket?"
    );
});

// #

QUnit.test("Használat ellenőrzése: logikai operátorok", function( assert ) {
    assert.ok(
        /.*\&\&.*movie\[4\].*\<.*1990.*/.test(currentEditorValue),
        "Használtak logikai kifejezéseket?"
    );
});

// #

showModalMessage('<h4>A megoldásod helyes.</h4>', 'Gratulálok');