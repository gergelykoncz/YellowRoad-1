## Repo létrehozása saját gépen: init
Amikor új projektet kezdünk, az első lépések egyike a verziókövetés beállítása.
A gitben ez rendkívül egyszerű, a git init parancsot kell használnunk.

#### A git init parancs használata
Egy tetszőleges mappában kiadva a git init parancs létrehoz egy üres git repót.
A parancs kiadása után egy rejtett .git mappa jön létre ott, ahol futtattuk a parancsot.
Minden verziókövetéssel kapcsolatos információt itt találunk, és ennek a mappának a törlésével tudjuk eltávolítani a gitet a projektünkből.

#### Hasznos tudnivalók:
- Nem csak üres mappában adhatjuk ki az init parancsot, meglévő projektben is használhatjuk.
- Ha kétszer adjuk ki egy mappában, nem történik semmi baj, ilyenkor minden marad a régiben.
- Az init parancsot használhatjuk egy paraméterrel, ekkor a git létrehozza a mappát is nekünk, pl:
```git init projektem```
Olyan, mintha ezt írtuk volna:
```
mkdir projektem
cd projektem
git init
```

#### Dokumentáció:  
https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
Lokálisan: git init --help