QUnit.test( "Változó ellenőrzése: napok", function( assert ) {
    assert.equal(
        false,
        typeof napok === 'undefined',
        "A napok változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: napok", function( assert ) {
    assert.ok(
        napok === 5,
        "A napok változó értéke 5?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: adokulcs", function( assert ) {
    assert.equal(
        false,
        typeof adokulcs === 'undefined',
        "A adokulcs változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: adokulcs", function( assert ) {
    assert.ok(
        adokulcs === 0.18,
        "A adokulcs változó értéke helyes?"
    );
});

// #

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
        bevetel === 147775,
        "A bevetel változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: kiadas", function( assert ) {
    assert.equal(
        false,
        typeof kiadas === 'undefined',
        "A kiadas változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: kiadas", function( assert ) {
    assert.ok(
        kiadas === 59260,
        "A kiadas változó értéke helyes?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: napiEredmeny", function( assert ) {
    assert.equal(
        false,
        typeof napiEredmeny === 'undefined',
        "A napiEredmeny változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: napiEredmeny", function( assert ) {
    assert.ok(
        napiEredmeny === 17703,
        "A napiEredmeny a bevetel és kiadas különbsége, osztva a napokkal?"
    );
});

// #

QUnit.test( "Változó ellenőrzése: ado", function( assert ) {
    assert.equal(
        false,
        typeof ado === 'undefined',
        "A ado változó létezik és van értéke?"
    );
});

// #

QUnit.test( "Érték ellenőrzése: ado", function( assert ) {
    console.log(parseInt(ado));
    assert.ok(
        parseInt(ado, 10) === 95596,
        "Az ado a napiEredmeny szorozva 30-al, majd szorozva az adokulcs-al?"
    );
});