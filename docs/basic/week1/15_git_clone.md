## Távoli repo klónozása: clone
Az előző leckében láttuk, hogyan tudunk saját repót létrehozni. Az esetek többségében azonban meglévő projekteken dolgozunk.
Először is meg kell szereznünk a kódbázist, hogy dolgozni tudjunk. Erre szolgál a git clone parancs.
Mint a neve is mutatja, egy meglévő repót klónoz.

#### A git clone parancs használata
A parancs használatához szükségünk lesz a távoli repó URL-jére. Maga a parancs így néz ki:
```git clone url```
Futtatása során a clone létrehoz egy új mappát ott, ahol kiadtuk, majd lemásolja a távoli repót.
Fontos tudnunk, hogy a klónozás során a mindent le fog tölteni a rendszer (teljes repó történet, fájlmódosítások, stb.), így egy régebbi és nagyobb projektnél a művelet sokáig tarthat.

#### Hasznos tudnivalók:
- Az clone parancsot használhatjuk egy második paraméterrel, ekkor a git létrehozza a mappát is nekünk, pl:
```git clone url projektem```
Olyan, mintha ezt írtuk volna:
```
mkdir projektem
cd projektem
git clone url
```

#### Dokumentáció:  
https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
Lokálisan: git clone --help