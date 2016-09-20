# Minimum - Maximum - Átlag
A legkisebb és legynagyobb kiválasztása, esetleg átlag számítás igazából az  
eddigi ismeretek kombinálásával megoldható.  

### Min - Max
> __Maximum kiválasztásnál__ azt feltételezem, hogy az első érték max,  
majd később felülírom, ha nagyobb értékkel találkozom.  
A második elemtől kezdek, és mindig megnézem hogy az aktuális elem nagyobb-e  
mint a max, ha igen akkor felülírom rá a max-ot:  
  
![Logic max](/docs/basic/week2/image/logic_max.gif)  

> __Minimum kiválasztásnál__ szintén a második elemtől kezdek,  
és mindig megnézem hogy az aktuális elem kisebb-e mint a min,  
ha igen akkor felülírom rá a min-t:  
  
![Logic min](/docs/basic/week2/image/logic_min.gif)  

### Átlag
Az átlagszámítás alapja, hogy összeadjuk az értékeket majd elosztjuk a számukkal.  
> Külső változót használunk az összeszámláláshoz.  
A példában a += szintaxist használom, ezzel egyszerűen lehet növelni egy változót:  

![Logic average](/docs/basic/week2/image/logic_average.gif)  

### Tipp  
__Vonjuk össze amit lehet__  
Természetesen a példákat kombinálhatjuk is egymással.  
A munka során arra kell törekedni, hogy minél kevesebb művelettel végezzünk  
el egy feladatot. Ha például kell a minimum, maximum és az átlag is, akkor  
egy ciklusban az összeset meg tudjuk kapni, nem kell minden számításhoz  
újra bejárnunk az egész töbmöt.
  
  
### Gyakorló feladatok:
<a href="http://37.139.16.100:3333/practice/basic/week2/18_logic_replace_order" 
target="_blank">Minimum - Maximum - Átlag</a>  
