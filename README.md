# Hv's Biograf - React

## Vad applikationen gör
React-appen visar filmer från "Hv's Biografs" MoviesApi.
Den hämtar och visar filmerna me filmkort som innehåller en bild, titel, genre, längd och huruvida de visas på bio nu eller kommer snart.

## Hur man kör applikationen
Klona repot "BiografSystem": https://github.com/Cevert90/BiografSystem

### Starta BiografSystem
```bash
cd BiografSystem
./run-all.ps1
```

### Installera och starta React-appen
```bash
npm install
npm start
```

## AI-användning
AI har ej använts nu då jag redan hade en färdig react-app från den förra uppgiften (som jag glömde lämna in tillsammans med det jag skickade i ett meddelande) som jag bara behövde ändra namn och sökvägar i, samt redigera lite för att passa den nya appens syfte och design. Men jag minns att jag fick hjälp med CORS sist gång då det strulade mycket, samt delar av grundstrukturen.

## Övrigt
Bilderna för filmerna ligger lokalt i `public/images/` och hämtas från MoviesApi via HTTP-anrop på localhost.