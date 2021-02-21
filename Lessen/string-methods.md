# Methods on strings+arrays by Marvi Hendriks

Hieronder een klein overzicht over verschillende methodes bij strings en arrays. Er bestaan er nog veel meer, hier zijn er alvast 20.

## **1. length**

geeft de lengte weer van de string. kan ook gebruikt worden bij arrays voor de lengte.

> ### string

```js
const random = "ikdoeditofdat";
console.log(random.length); //geeft als return: 13
```

> ### array

```js
const array = [0, 1, 2, 3, 4, 5];
console.log(array.length); //geeft als return: 6
```

---

## **2. indexOf()**

geeft de index terug van de ingegeven parameter. Als de parameter niet bestaat krijg je -1 terug.

> ### string

```js
const wieBenIk = "Ik ben ik en jij bent jij";
console.log(wieBenIk.indexOf("bent"));
//geeft als return: index 17(spaties tellen mee)
```

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.indexOf("tijger"));
//geeft als return: index 3
```

> ### verkeerde parameter

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.indexOf("poes"));
//geeft als return: -1
```

> ### 2de parameter

```js
const wieBenIk = "Ik ben ik en jij bent jij";
console.log(wieBenIk.indexOf("bent", 10));
```

Deze begint te tellen vanaf index 10.

---

## **3. lastIndexOf()**

geeft de laatse index terug van de ingegeven parameter. Als de parameter niet bestaat krijg je -1 terug. deze methode gebruik je wanneer je meerdere keren dezelfde waarde hebt, zodat je de laatste kan terug vinden.

> ### string

```js
const wieBenIk = "Ik ben ik en jij bent jij";
console.log(wieBenIk.lastIndexOf("jij"));
//geeft als return: index 22(spaties tellen mee)
```

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis", "tijger"];
console.log(dieren.lastIndexOf("tijger"));
//geeft als return: index 5
```

> ### verkeerde parameter

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.lastIndexOf("poes"));
//geeft als return: -1
```

> ### 2de parameter

```js
const wieBenIk = "Ik ben ik en jij bent jij";
console.log(wieBenIk.lastIndexOf("jij", 6));
```

Deze begint te tellen vanaf index 6.
let op! met een 2de parameter begint deze te tellen van achter naar voor. index 0 begint dus op de laatste letter "j" van het laatste woord "jij"!

---

## **4. search()**

deze is ongeveer gelijk aan de indexOf() methode.
het grootste verschil is dat er geen 2de parameter kan meegegeven worden.

---

## **5. slice()**

Deze methode verwijderd een deel van een string en returnt het verwijderde deel. deze methode neemt 2 parameters, namelijk de start positie(vanaf) en de eind positie(einde niet meegeteld).

> ### string

```js
const wieBenIk = "Ik ben ik en jij bent jij";
console.log(wieBenIk.slice(3, 6)); //einde positie telt het laatste niet mee dus als we 6 aangeven stopt hij bij 5.
//geeft als return: "ben"
```

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis", "tijger"];
console.log(dieren.slice(1, 2)); //einde positie telt het laatste niet mee dus als we 2 aangeven stopt hij bij 1.
//geeft als return: ["kat"]
```

> ### negatieve parameters

Als er negatieve parameters worden mee gegeven begint het tellen van achter naar voren.

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis", "tijger"];
console.log(dieren.slice(-2, -1)); //einde positie telt het laatste niet mee dus als we 2 aangeven stopt hij bij 1. let op, de parameters worden ook omgedraaid.
//geeft als return: ["muis"]
```

> ### 1 parameter

Als er maar 1 parameter gegeven wordt dan verwijderd hij alles na de gegeven parameter

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis", "tijger"];
console.log(dieren.slice(3));
//geeft als return: ["tijger","muis","tijger"]
```

---

## **6. substring()**

Is identiek aan de slice() methode, Maar deze methode kan geen negatieve parameters krijgen.

---

## **7. replace()**

Deze methode vervangt een string. Als eerste parameter geven we mee welke string we willen vervangen, en als 2de parameter geven we de nieuwe string mee.

> ### string

```js
const docent = "Bart is onze docent";
console.log(docent.replace("Bart", "Marvi"));
//geeft als return: "Marvi is onze docent"
```

---

## **8. toUpperCase()**

Verandert alles naar hoofdletters.

> ### string

```js
const docent = "Bart is onze docent";
console.log(docent.toUpperCase());
//geeft als return: "BART IS ONZE DOCENT"
```

---

## **9. toLowerCase()**

Verandert alles naar kleine letters.

> ### string

```js
const docent = "BART IS ONZE DOCENT";
console.log(docent.toLowerCase());
//geeft als return: "bart is onze docent"
```

---

## **10. concat()**

Deze methode voegt 2 strings samen. Deze kan ook gebruikt worden in plaats van de + operator.

> ### string

```js
const tekst1 = "Hallo";
const tekst2 = "Wereld!";
const tekst3 = tekst1.concat(" ", tekst2);
//de lege string als 1ste parameter zorgt voor de spatie in het eindresultaat.
console.log(tekst3);
//geeft als return: "Hallo Wereld!"
//met de plus operator zouden we dit zo schrijven: console.log(tekst1 + " " + tekst2);
```

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
const cursisten = ["Domenico", "Arne", "Jorg"];
console.log(dieren.concat(cursisten));
// voegt 2 arrays samen.
// geeft als return: ["hond", "kat", "leeuw", "tijger", "muis", "Domenico", "Arne", "Jorg"]
```

---

## **11. charAt()**

Deze methode weergeeft het karakter weer van de opgevraagde index.

> ### string

```js
const hobby = "Ik speel rugby";
console.log(hobby.charAt(9));
//geeft als return: "r"
```

---

## **12. toString()**

Deze methode maakt van een array een string met array waardes.

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.toString());
//geeft als return: hond,kat,leeuw,tijger,muis
```

---

## **13. join()**

Deze methode is identiek aan toString(), enkel kan je bij deze als parameter meegeven waarmee je de string gesplits wilt hebben.

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.join("*"));
//geeft als return: hond*kat*leeuw*tijger*muis
```

---

## **14. pop()**

Deze methode verwijdert het laatste element in een array.

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.pop());
//geeft als return: muis
console.log(dieren);
//geeft als return: ["hond","kat","leeuw","tijger"]
```

---

## **15. push()**

Deze methode voegt een nieuwe element toe aan de array, op de laatste index.

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.push("olifant"));
//geeft als return: de lengte van de array = 6
console.log(dieren);
//geeft als return: ["hond","kat","leeuw","tijger","muis","olifant"]
```

---

## **16. shift()**

Deze methode verwijdert het eerste element van de array. En shift de andere elementen naar een lagere index.

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.shift());
//geeft als return: "hond"
console.log(dieren);
//geeft als return: ["kat","leeuw","tijger","muis"]
```

---

## **17. unshift()**

Deze methode voegt een nieuwe element toe op de array op de eerste index en verplaats de andere elementen.

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.unshift("panda"));
//geeft als return: de nieuwe lengte van array = 6
console.log(dieren);
//geeft als return: ["panda","hond","kat","leeuw","tijger","muis"]
```

---

## **18. splice()**

Deze methode kan gebruikt worden om nieuwe elementen toe te voegen in de array op bepaalde posities.

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
dieren.splice(2, 0, "giraf", "fret");
// 1ste parameter geeft bepaalt de positie waar de nieuwe elementen worden ingevoegd. De 2de parameter geeft aan hoeveel elementen verwijderd worden. De rest van de parameters zijn de elementen die toegevoegd worden.
console.log(dieren);
//geeft als return: ["hond","kat","giraf","fret","leeuw","tijger","muis"]
```

hieronder met het verwijderen van element.

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.splice(2, 1, "giraf", "fret"));
//geeft als return: ["leeuw"]
//["hond","kat","giraf","fret","tijger","muis"]
```

---

## **19. slice()**

deze methode neemt 1 of meerdere elementen uit de array en zet deze elementen in een nieuwe array.

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.slice(1));
//geeft als return ["kat","leeuw","tijger","muis"]
```

> ### 2 parameters

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.slice(1, 3)); // neemt het element op index 1 tot index 2. (3de index niet!)
//geeft als return ["kat","leeuw"]
```

---

## \*\*20. reverse()

deze methode zorgt ervoor dat de elementen in de array andersom gaan zitten.

> ### array

```js
const dieren = ["hond", "kat", "leeuw", "tijger", "muis"];
console.log(dieren.reverse());
//geeft als return ["muis","tijger","leeuw","kat","hond"]
```

---
