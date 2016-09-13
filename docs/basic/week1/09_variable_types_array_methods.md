## Array metódusok  
A tömbök esetén számos metódus áll rendelkezésre az adatok kereséséhez, ellenőrzéséhez, a tömbök vágásához vagy egyesítéséhez.  
Most csak a legalapvetőekkel foglalkozunk, később a függvények megismerése után visszatérünk még a magasabb szintű metódusokra is.  

### push()
Segítségével új elemet tudunk felvenni a tömb végére. Azaz az így felvett elem a tömbünk utolsó eleme lesz.  
Fontos, hogy ez a metódus megváltoztatja az eredeti tömböt, azaz nem kell felül definiálnunk ahhoz  
hogy a módosítások érvénybe lépjenek. Miután a metódus lefutott a tömb új hosszát adja vissza.    

### pop()
A push() -tól eltérően nem hozzáad, hanem elvesz egy elemet a tömb végéről.  
A törölt elemet adja vissza és szintén azonnal módosul az eredeti tömb.  
  
> A példában a push() és a pop() működését is bemutatjuk:  
  
![Boolean definíció](/docs/basic/week1/image/variable_types_array_definition.gif)   

### unshift()
A push() -hoz hasonlóan működik, csak a tömb elejére ad hozzá új elemet, azaz tolja az elemeket egyel hátrébb.  
Hatására minden meglévő tömbelem indexe eggyel nőni fog.  

### shift()  
Ez pedig a pop() párja, egy elemet kivesz a tömb elejéről és a többit eggyel előre tolja.  
Hatására minden meglévő tömbelem indexe eggyel csökkenni fog.  
  
> A példában az unshift() és a shift() működését is bemutatjuk:  
  
![Boolean definíció](/docs/basic/week1/image/variable_types_array_definition.gif)  
  
### slice()  
A tömböt vágja. Két számot vár, start és end a nevük.  
- start: azt adja meg, hogy hol kezdje a vágást. Ha 0, akkor a tömb elején kezdi, ha mínusz szám, akkor hátulról fogja számolni.  
- end: azt adja meg hogy melyik elemnél fejezze be a vágást. Ugyanazok igazak rá, mint a start-ra.  
  __FONTOS: nem módosítja az eredeti tömböt, hanem egy új tömbbel tér vissza.__  
![Boolean definíció](/docs/basic/week1/image/variable_types_array_definition.gif)  


### Dokumentáció: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods  

### Gyakorló feladatok:
<a href="http://cherryapps.hu/yellow-road" target="_blank">9-es számú gyakorlati feladat.</a>


Alapvető metódusok: Push, Pop, Shift, Join, Slice
