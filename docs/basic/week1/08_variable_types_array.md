## Array, a tömbök világa  
Értékek indexelt halmaza. Ez a tömb. Úgy kell elképzelni, mint egy polcot ahová felpakoljuk a dolgokat.  
Az index az a mutató, amivel elérjük a tömb egyes elemeit. Tehát minden elemnek van egy száma a tömbön belül,  
amivel le tudjuk kérni az értékét vagy módosítani tudjuk.  
> A tömbökbe szabadon elhelyezhetünk Number, String, Boolean, Object sőt akár Array típusú elemeket is.  
Ha tömbbe tömböt helyezünk, akkor azt __többdimenziós__ tömbnek nevezzük.  

### Dinamikus  
Javascript esetén a tömb dinamikus, ami azt jelenti, hogy bármikor vehetünk fel új elemet, vagy törölhetünk meglévőt.  
Ez nem minden progremnyelv esetén van így, Java alatt például előre meg kell adnunk a tömbünk hosszát.  
  
### Mixed  
Másik különbség például a Java nyelvvel szemben, hogy lehet mixelt a tömb,  
azaz egy tömbön belül különböző típusú elemeket tárolhatunk.  

### Tömb létrehozása
Új tömböt legegyszerűbben a szögletes zárójelek használatával hozhatunk létre.  
> Az alábbi példában egy három elemű tömböt definiálunk:  
  
![Boolean definíció](/docs/basic/week1/image/variable_types_array_definition.gif)

### Hozzáférés a tömb elemeihez, az index
Amikor elemeket adunk a tömbhöz, a Javascript értelmező automatikusan megszámozza azokat.  
Javascript-ben a tömb indexek csak számok lehetnek.  
__FONTOS: az index mindig 0-val kezdődik!__  
Azaz a tömb első elemét 0 indexel érjük el, és nem 1-el.  
> A példa azt mutatja meg, hogy egy tömb elemeit hogyan érjük el és hogyan módosítjuk az  
indexük segítségével:  
  
![Boolean definíció](/docs/basic/week1/image/variable_types_array_index.gif)  

### isArray(), tömb azonosítása
A munkánk során előfordul, hogy meg kell állapítanunk egy változóról hogy Array típusú-e?  
A typeof utasítás a tömböket Object típusúnak ismeri fel, ezért nem alkalmas az azonosításukra. 
Erre a célra az Array objektum isArray metódusa szolgál. Ha megadunk neki egy változót, akkor  
megállapítja hogy tömb-e?  
> A példában a tömb esetén true értéket kapunk vissza, ami azt jelenti hogy igaz - azaz tömbbel van dolgunk.  
Ellenkező esetben az eredmény false - hamis - azaz nem tömböt adtunk át az isArray metódusnak:  
  
![Boolean definíció](/docs/basic/week1/image/variable_types_array_isarray.gif)  

### Dokumentáció: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  

### Gyakorló feladatok:
<a href="http://cherryapps.hu/yellow-road" target="_blank">8-as számú gyakorlati feladat.</a>
