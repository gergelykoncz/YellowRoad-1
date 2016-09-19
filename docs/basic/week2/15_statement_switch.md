# Switch - a kapcsoló  
Ahogy a neve is mutatja, a switch egy kapcsoló.  
Több állása is lehet, egy változót vizsgál, és annak az értéke alapján  
ugrik a megfelelő utasításhoz.  

### Használata:  
Egy paramétere van, egy olyan változó vagy kifejezés, ami értéket ad vissza.  
Azután meg kell adni hogy milyen érték hatására milyen utasítás fusson le.  
Kulcsszavak:  
  - switch(value) - a value az az érték amit figyel a switch
  - case value: kifejezés break; - ha a value megegyezik a vizsgált értékkel,  
  lefut a kifejezés, utána break utasítást teszünk, hogy a többi ne fusson le 
  - default: kifejezés - ha egyik case sem volt igaz, akkor ez fog lefutni  

Előnye hogy gyorsabb mint az else...if, viszont csak konkrét értékeket lehet vele 
vizsgálni, azaz kisebb nagyobb logikai kifejezést nem tud értelmezni.  
  
> Autókat hasonlítok össze és megállapítom hogy milyen :  

![Switch statement](/docs/basic/week2/image/statement_switch.gif)  

### Dokumentáció: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch  
  
### Gyakorló feladatok:
<a href="http://37.139.16.100:3333/practice/basic/week2/statement_switch" 
target="_blank">Switch, a kapcsoló</a>   


