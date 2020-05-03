Ohjelma löytyy mistä?

https://tikerola.github.io/busstops/

Se on tehty millä?

Käyttöjärjestelmä: Windows,
Kielet: Javascript ja React,
Kuvankäsittely: Gimp

Asennus

1 Lataa repositorio
2 Mene hakemistokansioon
3 Kirjoita 'npm install'
4 Latautumisen jälkeen kirjoita 'npm start' 


Miten ohjelman pitäisi toimia?

Ohjelmassa on neljä värikoodattua bussilinjaa, jotka menevät molempiin suuntiin. Alasvetovalikosta tai kartan pysäkeistä voi valita
lyhimmän reitin lähtö- ja päätepysäkin välillä. Lyhin reitti on laskettu Dijkstran algoritmillä ja sitä varten on toteutettu WeightedGraph-luokka, mikä hyväksikäyttää PriorityQueue-luokkaa. 
