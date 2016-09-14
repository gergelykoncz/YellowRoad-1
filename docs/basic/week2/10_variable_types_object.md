## Az Objektum - rugalmas adattárolás  
Adatok tárolása kulcs - érték párok segítségével.  
  
### key - kulcs  
> Az Objektumok esetén nem automatikusan indexelődnek az elemek mint a tömb esetén, hanem mi határozzuk meg a kulcs érték párokat.  
A kulcsoknak minden esetben String típusúaknak kell lenniük.  
  
### value - érték  
> A kulcsokkal jelölt értékeket tulajdonságoknak is szoktuk nevezni.  
Az alábbi példában egy egyszerű objektumot hozunk létre.  
Figyeljük meg, hogy az objektumot kapcsos zárójelek határolják, a kulcs érték párokat vesszők,  
a kulcsot pedig kettőspont választja el az értéktől:  
  
![Objektum létrehozása](/docs/basic/week1/image/variable_types_object_definition.gif)  
  
### Object.keys() - az objektum kulcsai  
Az objektumok esetén fontos hogy tudjuk mit tároltunk bennük. Amint már említettük, az objektum elemeit  
a kulcsok segítségével érhetjük el. A kulcsokat pedig az Object.keys metódus adja vissza.  
> Az Object.keys metódus tömb formában adja vissza a kapott objektum kulcsait.  
Az objektum tulajdonságait úgy tudjuk elérni, hogy az objektum neve után ponttal elválasztva megadjuk  
a kiválasztott tulajdonság kulcsát:  
  
![Objektum kulcsok](/docs/basic/week1/image/variable_types_object_methods_keys.gif)  
  
### Az objektum hossza  
Az objektumoknak nincs length tulajdonsága mint a tömböknek, ezért más módszerhez kell folyamodnunk  
ha szeretnénk megtudni az elemeiknek a számát. Erre a legegyszerűbb módszer, ha nem az elemeiket,  
hanem a kulcsikat számláljuk meg.  
> __A példában láncolt metódus hívást alkalmazunk.__  
Ennek lényege, hogy egy függvény által visszaadott típusra azonnal meghívjuk annak szabványos metódusát  
vagy lekérjük egy adott tulajdonságát, jelen esetben a tömb elemeinek számát azaz a tömb hosszát.  
Az Object.keys tömböt ad vissza, majd annak le is kérjük azonnal a length tulajdonságát:  
  
![Objektum kulcsok](/docs/basic/week1/image/variable_types_object_length.gif)  
  
### Dokumentáció: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object  
  
### Gyakorló feladatok:
<a href="http://37.139.16.100:3333/practice/basic/week2/10_variable_types_object" target="_blank">Objektum létrehozása</a>  
  
