## String tulajdonságok és metódusok.  
Ahogy a Változó mint Objektum résznél láttuk, minden elemi típusnak vannak tulajdonságai és metódusai.  
A különböző típusok esetén vannak átfedések, azaz egy tulajdonság vagy metódus több típus esetén is létezhet.  
  
### Tulajdonságok  
#### length  
Megadja a String típusú változó hosszát, azaz hogy hány karakterből áll.  
![String length tulajdonság](/docs/basic/week2/image/variable_types_string_property_length.gif)
  
### Metódusok  
#### trim()  
Eltávolítja a felesleges szóközöket amelyek a String előtt és után találhatóak.  

#### concat()
Új karaktereket fűz hozza a meglévő String-hez.  

#### toLowerCase()
Kisbetűssé alakítja az adott String-et.  

#### toUpperCase()
Az előzővel ellentétben nagybetűssé alakítja a karaktereket.  
> Az előző négy metódust egy példában mutatom be:  
  
![String metódusok 1](/docs/basic/week2/image/variable_types_string_methods_tolower_toupper.gif)

#### indexOf()
Megkeresi a Sting-en belül egy adott szövegrész kezdetét.  
A kezdő karakter indexét adja vissza, amely 0-tól kezdődik, azaz az első karakter a 0 és így tovább.  
![String metódusok 1](/docs/basic/week2/image/variable_types_string_methods_indexof.gif)

#### replace()
Kicseréli a megadott szövegrészt a String-en belül. 
Ahogy a példában is látni fogjuk, ennek a metódusnak kettő darab úgynevezett paramétere van,  
tehát két adatot kell a zárójelek között megadni, először azt amit cserélni szeretnénk,  
azután pedig azt amire szeretnénk cserélni.  
![String metódusok 1](/docs/basic/week2/image/variable_types_string_methods_replace.gif)  
  
### Dokumentáció:  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods  
  
### Gyakorló feladatok:  
<a href="http://cherryapps.hu/yellow-road" target="_blank">6-os számú gyakorlati feladat.</a>
