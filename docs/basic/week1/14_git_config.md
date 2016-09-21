##  Kezdeti beállítások: config
Mielőtt elkezdhetnénk használni a gitet el kell végeznünk néhány beállítást.

#### Felhasználónév és email megadása
Minden gites változtatásunk véglegesítéséhez (commit, lásd később) szükség lesz egy felhasználónévre és egy email címre.
Ezt a git a saját gépünkön, GitHub használata nélkül is kéri. Állítsuk is be most:

``````
git config --global user.name "Link Elek"
git config --global user.email linkelek@gmail.com
``````

Fontos tudni, hogy az itt megadott email címnek és névnek semmi köze pl. a GitHubos azonosítonkhoz, gyakorlatilag bármit megadhatunk.

#### A git konfiguráció részletei
A git három szinten tárolja a beállításokat:
- Rendszerszinten minden felhasználóra érvényes beállítások
- Felhasználó szinten, az adott user accountra érvényes beállítások (az előbbi --global parancs is ezt használta)
- Repó szintű beállítások

A beállításokat ki is tudjuk listázni, a ```git config --list``` paranccsal.

#### Dokumentáció:  
- https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
- Lokálisan: git config --help
