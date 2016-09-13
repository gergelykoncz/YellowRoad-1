## Változó alapfogalma.
A változó, ahogy a neve is mutatja, egy olyan memória terület, ahol tetszőleges adatokat tárolhatunk.  
  
Létrehozásának két fontos lépése van.  
#### Deklaráció:  
megadjuk a változó nevét, bizonyos nyelvekben a típusát is, de nem határozzuk meg hogy milyen értéket tárolunk majd benne. 
Azt hogy változót akarunk deklarálni, a var kulcsszóval jelezzük.  
#### Definíció:  
értéket adunk a változónknak, azt is mondhatjuk hogy a memória területet feltöltjük adatokkal.

> A deklaráció és definíció egy időben is megvalósulhat, ekkor a létrehozás során rögtön értéket is adunk az új változónknak. Ezt mutatja az alábbi példa:
  
![Változó definiálása](/docs/basic/week1/image/variable_definition.gif)  
  
#### Felül Definiálás:
Amikor egy már meglévő változó értékét felül kívánjuk írni, nem kell használnunk a var kulcsszót,  
hanem a változó nevére való hivatkozás után meg kell adni az új értéket.  
Az alábbi példában azt láthatjuk, hogy a változó értékét 10-zel növeljük.  
Az értékadás esetén először az utasításunk jobb oldala értékelődik ki,  
majd az itt létrejött érték felülírja a változóban tárolt eredeti értéket.  
  
![Változó felül-definiálása](/docs/basic/week1/image/variable_redefinition.gif) 

#### Dokumentáció:  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

#### Gyakorló feladatok  
[1-es számú gyakorló feladat.](http://cherryapps.hu/yellow-road)

