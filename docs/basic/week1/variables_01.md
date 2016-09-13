# Rövid összefoglalás
A változók a programozási nyelvek alapját képezik. Arra szolgálnak, hogy dinamikus adatokat tároljunk bennük, amelyeket később felhasználunk a programunk futása során.
--
Amikor létrehozunk egy változót, a legtöbb esetben megadjuk annak típusát, ebből tudja az értelmező, hogy mekkora helyet foglaljon le számára a memóriában és milyen műveleteket lehet rajta végrehajtani. 
--
A gyengén típusos nyelvekben, mint például a Javascript, nem szükséges megadnunk a típust, ettől függetlenül van típusa a változónknak, csak azt automatikusan rendeli hozzá a kódot futtató értelmező.
Ebben a részben a változókkal, azok típusaival és helyes használatukkal fogunk megismerkedni.


## Gyakorlati feladat - láncolt lista

Írj egy olyan láncolt listát implementáló osztályt `LinkedList` néven, mely `int` típusú értékeket képes tárolni.
Legyen egy metódusa, melyel egy elemet lehet a végére hozzáadni (`add(int value)`), és egy metódusa, mellyel a megadott
indexű elemet lehet visszaadni (`get(int index)`).

### Hibakezelés

Ha az `add` függvény bemenete `null`, a metódus dobjon egy `NullPointerException` kivételt.

Ha a `get` függvény bemente olyan index, mely nem valós, tehát vagy negatív szám, vagy nagyobb, mint a lista mérete,
`IllegalArgumentException` kivételt dobjon.

### Megvalósítási javaslatok

A lista csak az első elemre tartalmaz hivatkozást, és egy elem csak a következő elemre tartalmaz referenciát.

### Tesztesetek

#### Pozitív ágak

[source,java]
----
include::{testdir}/week5/MyLinkedListTest.java[lines=15..25]
----

#### Negatív ágak

[source,java]
----
include::{testdir}/week5/MyLinkedListTest.java[lines=27..53]
----

### Tippek

A lista elemei egy belső osztállyal legyenek reprezentálva, melyek tartalmazzák az értéket, valamint a következő elemre
egy hivatkozást. A következőképp lehet osztályon belül egy belső osztályt definiálni.

[source,java]
----
public class MyCollection {

    private class MyCollectionItem {
        private Object value;

        private MyCollectionItem refToAnotherItem;
    }

}
----

Hozzáadásnál ki kell keresni az utolsó elemet.
