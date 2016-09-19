# For in ciklus  
Több dologban különbözik a For ciklustól.  
- Nincs benne iterátor változó.  
- A megadott Array vagy Objektum kulcsit járja be.  
  
### Használata:  
- Paraméterei:  
  - kulcs változó: ebben tárolja mindig az aktuális kulcsot.
  - kollekció: az a tömb vagy objektum, amelyet bejár a ciklus.  

> __Egy egyszerű for...in ciklus:__  
A k változó a key rövidítése, ez tárolja az aktuális kulcsot.  
Külön ki is írtuk a kulcsot és az értéket.  
  
![Objektum kulcsok](/docs/basic/week2/image/loops_forin.gif)  

### Tömbre és Objektumra is  
Nagy előnye az alap For ciklussal szemben, hogy tömbre és objektumra is  
alkalmazható, nem kell hozzá külön változó, hogy végig tudjuk járni az  
objektumok kulcsait.  
> A példában ugyanazt a ciklust hasznájuk fel tömbhöz és objektumhoz is:  
  
![Objektum kulcsok](/docs/basic/week2/image/loops_forin_array_and_object.gif)  

### Előnyei  
- Tömbre és objektumra is működik.
- Egyszerűbb szintaxis.  
  
### Hátránya  
- Nehezebb a futását limitálni, mert nincs külön iterátora.  

> A for...in ciklus esetén is használható a __continue__ és __break__ utasítás:  
  
![Objektum kulcsok](/docs/basic/week2/image/loops_forin_continue_break.gif)  
  
### Dokumentáció: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for  
  
### Gyakorló feladatok:
<a href="http://37.139.16.100:3333/practice/basic/week2/12_loops_forin" 
target="_blank">For...in ciklus gyakorlása</a>  
