# Keresés - hol a tű  
Ki ne keresett volna már valamit?  
Hogyan fogunk hozzá? Vagy megpróbálunk emlékezni rá, hová tettük,  
vagy módszeresen végigkutatjuk az összes helyet ahol lehet.  
Mivel a gép nem felejti el, hová tettünk egy változót, ezért a programozásban  
arról lehet szó, hogy módszeresen megkeressük a tűt a szénakazalban.  

### Keresés és ciklusok:
A keresést legegyszerűbben ciklusokkal tudjuk megoldani.  
Amikor például csak egy dolgot keresünk, a keresést befejezhetjük ha megtaláltuk.  
> __lineáris keresés:__ a példában for ciklust használunk és break -el kilépünk  
belőle találat esetén. Olyan felhasználót keresünk, akinek a neve 'Filpo':  
  
![Search with for](/docs/basic/week2/image/logic_search_with_for.gif)  

> __logaritmikus keresés:__  
> - Csak akkor működik, ha az értékeink rendezettek.  
> - Lényege, hogy elfelezi az értékek halmazát,  
megnézi hogy a keresett érték melyik felében van és csak ott keresi.  
Majd ismét elfelezi és így tovább. Végül vagy megtalálja az értéket, vagy nem :-)  
  
> __keresés szórészletre:__  
Az első példában könnyű dolgunk volt, mert konkrét szöveget kerestünk.  
Mi van ha szórészletre vagy szöveg egyezésre kell keresni, esetleg több feltételre?   
Ekkor jöhet jól például az indexOf függvény, amit már ismerünk:  
  
![Search with indexOf](/docs/basic/week2/image/logic_search_indexof.gif)  
  
### Gyakorló feladatok:
<a href="http://37.139.16.100:3333/practice/basic/week2/16_logic_search" 
target="_blank">Keresések</a>   


