# Rendezés    
Mi a teendő, ha sorba akarjuk rendezni az elemeinket egy kollekción belül?  
Ha kevés eleme van, akkor akár fejben is elvégezhetjük a dolgot.  
Viszont több ezer vagy millió elem esetén ez már nem járható út.  

### Array.sort()  
Tömbök esetén használhatjuk a beépített sort metódust is.  
> A sort metódus egyszerűbb rendezést tesz lehetővé nem mixelt tömbök esetén:  
  
![Array sort](/docs/basic/week2/image/logic_sort_array_sort.gif)  

### Rendezési algoritmusok  
Mivel ez egy alapvető kérdés az adatkezelésnél, több megoldás is van rá.  
Létezik cserés, buborékos, beszúrásos, szétosztó és még sok más rendezés.  
Mi egy egyszerűbb cserés rendezést fogunk most megnézni, lépésről lépésre.  

### Cserés rendezés lépésről lépésre:  
> __1. Definiálunk egy tömböt a rendezéshez:__  
Hogy ne legyen annyira egyszerű, az ismert Users tömböt rendezzük,  
a benne lévő objektumok age tulajdonsága alapján, emelkedő sorrendbe:  
  
![Logic sort](/docs/basic/week2/image/logic_sort_array_1.gif)  
  
> __2. Külső for ciklus:__  
Két for ciklusunk lesz egymásba ágyazva, a külsővel fogjuk bejárni az elemeket,  
de csak az utolsó előtti elemig, mert a Users.length -ből levonunk egyet.  
Az utolsó elemet majd a belső ciklus vizsgálja:  
  
![Logic sort](/docs/basic/week2/image/logic_sort_array_2.gif)  
  
> __3. Belső for ciklus:__  
A belső for ciklus pedig a külsőnél mindig eggyel nagyobb elemmel indít  
és elmegy a tömb végéig. Így az összehasonlítás két szomszédos elemmel kezdődik.  
Azért kell eggyel hátrébb kezdenünk a belső ciklusban, hogy nehogy saját magával  
hasonlítsunk össze egy elemet:  
  
![Logic sort](/docs/basic/week2/image/logic_sort_array_3.gif)  
  
> __4. Két elem cseréje:__  
Ha a külső ciklus eleme nagyobb mint a belsőjé, akkor kicseréljük őket.  
Ezt többféleképpen meg lehet oldani, én most egy tömböt használok hozzá  
átmeneti változónak. Ide csak a csere idejére kerülnek az elemek:  
  
![Logic sort](/docs/basic/week2/image/logic_sort_array_4.gif)  
  
> __5. Rendezett tömb:__  
Végül megnézzük mit csináltunk:  
  
![Logic sort](/docs/basic/week2/image/logic_sort_array_5.gif)  
  
### Gyakorló feladatok:
<a href="http://37.139.16.100:3333/practice/basic/week2/18_logic_replace_order" 
target="_blank">Rendezés gyakorlása</a>  
