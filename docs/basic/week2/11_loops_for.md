# For ciklus  
> __Ciklusok:__  
Folyamatosan ismétlődő programrészletek.  
Egy ciklus mindaddig ismétlődik amíg a feltétele igaz.  
Olyan, mintha azt mondanánk, addig csináld ezt, amíg igaz hogy ...  
  
### For  
A for ciklus minden programnyelvben megtalálható.  
Három paramétere van:  
  - iterátor: egy Number típusú változó, azt tárolja 
  hogy hányszor futott le a ciklus.  
  - feltétel: Boolean, amíg ez a feltétel igaz, addig fut a ciklus.  
  - záró utasítás: minden ciklus végén lefut, itt szoktuk az iterátort növelni.  

Ciklusmag:  
  az az utasítás vagy utasítások, amelyek a feltétel teljesülése esetén lefutnak.
    
Az alábbi példa egy for ciklust mutat be:  
  
![Objektum kulcsok](/docs/basic/week2/image/loops_for.gif)  

> __Előltesztelő ciklus:__  
Először megvizsgáljuk, hogy a feltételünk igaz-e, és ha igen akkor 
lefut a ciklusmag.  
Tehát a For egy tipikusan előltesztelő ciklus.  

> __Tömb bejárása ciklussal:__  
Ha szeretnénk egy kollekció összes elemét végigjárni és valamilyen vizsgálatot  
vagy műveletet végezni velük, akkor általában az első elemtől indulunk,   
lefut a ciklusmag és növeljük az iterátort.  
Ezt mindaddig kell ismételnünk amíg a kollekció 
végére nem érünk, tehát ismernünk kell hozzá a hosszát.  
  
Tömb bejárása For ciklussal:  
  
![Objektum kulcsok](/docs/basic/week2/image/loops_for_over_array.gif)  

> __Objektum bejárása ciklussal:__  
Egy Objektum bejárása ennél bonyolultabb feladat.  
Itt ugyanis nem számokkal indexelünk, hanem szöveges kulcsokat használunk.  
Ezért először lekérjük a kulcsokat, majd a kulcsok tömbjéből olvassuk ki az  
iterátornak megfelelő kulcsot.  
Kicsit bonyolultnak hangzik? Lesz ez még jobb is ;-)  
    
Objektum bejárása For ciklussal:  
  
![Objektum kulcsok](/docs/basic/week2/image/loops_for_over_object.gif)  
  
### continue és break  
> __continue:__ ha valamiért úgy döntünk hogy mégsem akarjuk lefuttatni a ciklusmagot, akkor a  
'continue;' utasítással tovább tudunk ugrani a következő elemre.  
__break:__ a 'break;' utasítás nem csak a következő elemre ugrik, hanem  
megszakítja a ciklust, azaz a ciklusmag többet nem kerül végrehajtásra,  
úgy is mondhatnánk, a program _továbbmegy_.  
  
Continue és break használata:  
  
![Objektum kulcsok](/docs/basic/week2/image/loops_for_continue_break.gif)  

  
### Dokumentáció: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for  
  
### Gyakorló feladatok:
<a href="http://37.139.16.100:3333/practice/basic/week2/11_loops_for" 
target="_blank">For ciklus gyakorlása</a>  
