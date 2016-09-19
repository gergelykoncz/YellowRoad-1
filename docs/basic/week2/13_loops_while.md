# While ciklus  
Ahogy a neve is mutatja, mindaddig fut amíg a megadott feltétel igaz.  
Egy paramétere van, ami egy logikai kifejezés, ennek kell igaznak lennie  
hogy a ciklus újra lefusson.  
  
### Használata:  
- Paraméterei:  
  - feltétel: egy logikai kifejezés.  

> Egy while ciklus létrehozása:  

![Objektum kulcsok](/docs/basic/week2/image/loops_forin.gif)   
  
### Végtelen ciklus:  
A while ciklus használata esetén gyakran előfordul, hogy a feltételt nem  
figyeljük megfelelően. Ekkor fordul elő, hogy a feltétel mindig igaz marad  
és a ciklus végtelen hurokba kerül.  
A különböző értelmezők általában bizonyos számú futás után hibát adnak és 
leállnak.  
__Mindig figyeljünk oda a feltétel megfelelő vizsgálatára!__  
  
> Az alábbi példa egy végtelen ciklust mutat be.  
A probléma az, hogy a feltételt elfelejtettem módosítani a ciklusmagban:  
  
![Objektum kulcsok](/docs/basic/week2/image/loops_forin.gif)  
  
### Kollekciók bejárása  
Természetesen a while ciklus is alkalmas arra, hogy tömböket vagy objektumokat  
bejárjunk a segítségével. Itt viszont nem kapunk semmi segítséget ehhez, nekünk  
kell leprogramoznunk a kulcsok léptetését.  
> A példában kiolvasom a kulcsokat, majd bejárom az objektumot, 
közben pedig növelem az iterátort, amivel kiolvasom a kulcsokat:  
  
![Objektum kulcsok](/docs/basic/week2/image/loops_forin.gif)  
    
### Dokumentáció: 
https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Statements/while  
  
### Gyakorló feladatok:
<a href="http://37.139.16.100:3333/practice/basic/week2/12_loops_forin" 
target="_blank">While ciklus</a>  
