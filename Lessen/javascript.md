<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# JavaScript

## Bart Duisters

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# Introductie

Het is essentieel om alle kennis uit 'Leren Programmeren' te beheren.

Bepaalde onderdelen waarop verder gebouwd zal worden, worden hieronder kort overlopen.

## Variabelen

`var`: Sleutelwoord om een variabele aan te maken, verouderd.
`let`: Sleutelwoord om een variabele aan te maken, deze kan op een later moment een nieuwe waarde toegekend krijgen.
`const`: Sleutelwoord om een variabele aan te maken, de variabele moet meteen een waarde toegekend krijgen en kan daarna niet opnieuw een waarde toegekend krijgen.

## Datatypes

### Primitieve datatypes

- `string`
  - bv. `"Dit is een string."`, `'Dit is ook een string.'`
- `number`
  - bv. `69`, `3.141592653`
- `boolean`
  - bv. `true`, `false`
- `undefined`
  - Wanneer een variabele nog geen waarde toegekend heeft gekregen, is het type `undefined`.

### Complexe datatypes

- `object`
- `function`

## Function

```js
/* Functie aanmaken */
function zegHallo(naam) {
  // Codeblok van de functie tussen { en }
  console.log("Hallo " + naam + "!");
  console.log(`Hallo ${naam}!`);
}

/*
 * Anonieme functie toekennen aan een variabele.
 * Gebruik maken van 'arrow notation'.
 */
const zegDoei = (naam) => {
  console.log(`Doei ${naam}!`);
};

/* Functie aanroepen met een parameter */
zegHallo("Bart"); // Print 'Hallo Bart!'

/* Functie aanroepen met een parameter */
zegDoei("Bart"); // Print 'Doei Bart!'
```

## Conditionele statements

Afhankelijk of een bepaalde 'conditie' ofwel 'voorwaarde' voldaan is, wordt code uitgevoerd.

### if

```js
const voorwaarde = true;

if (voorwaarde) {
  // Dit codeblok wordt uitgevoerd
  console.log("De voorwaarde is true");
}
```

### if - else

```js
const voorwaarde = false;

if (voorwaarde) {
  // Dit codeblok wordt NIET uitgevoerd
  console.log("De voorwaarde is true");
} else {
  // Dit codeblok wordt uitgevoerd
  console.log("De voorwaarde is false");
}
```

### if - else if - else

```js
const voorwaarde = 300;

if (voorwaarde < 100) {
  // Dit codeblok wordt NIET uitgevoerd
  console.log("De voorwaarde is kleiner dan 100");
} else if (voorwaarde < 200) {
  // Dit codeblok wordt NIET uitgevoerd
  console.log("De voorwaarde is kleiner dan 200");
} else {
  // Dit codeblok wordt uitgevoerd
  console.log("De voorwaarde is gelijk of groter dan 200");
}
```

### switch

```js
const naam = "John Duck";

switch (naam) {
  case "Mark":
    // Dit codeblok wordt NIET uitgevoerd
    console.log("Hallo Mark!");
    break; // Stop met het uitvoeren van de switch
  case "Bart":
  case "Barry":
    // Dit codeblok wordt NIET uitgevoerd
    // Twee cases, beide cases voeren dit codeblok uit
    console.log("Hallo Bart of Barry!");
    break;
  case "John Duck":
    // Dit codeblok wordt uitgevoerd
    console.log("Hallo John Duck!");
    break;
  default:
    // Dit codeblok wordt NIET uitgevoerd
    console.log("Hallo vreemdeling!");
  // Geen break nodig, de switch stopt sowieso met uitvoeren op dit punt
}
```

## Iteratieve statements

### for

```js
for (let i = 0; i < 10; i++) {
  // Dit codeblok wordt 10x uitgevoerd
  // de eerste bevat heeft i waarde 0
  // de tiende bevat heeft i waarde 9
  console.log(`Dit is lus ${i}`);
}
```

### while

```js
let i = 0;
while (i < 10) {
  // Dit codeblok wordt 10x uitgevoerd
  // de eerste bevat heeft i waarde 0
  // de tiende bevat heeft i waarde 9
  console.log(`Dit is lus ${i}`);
  i++;
}
```

### do while

```js
let i = 0;
do {
  // Dit codeblok wordt 10x uitgevoerd
  // de eerste bevat heeft i waarde 0
  // de tiende bevat heeft i waarde 9
  console.log(`Dit is lus ${i}`);
  i++;
} while (i < 10);
```

## Objecten

Bijna alles is een object in JavaScript. Het is dus belangrijk om objecten door en door te begrijpen.

```js
const persoon = {
  voornaam: "John",
  achternaam: "Duck",
  volledigeNaam: function () {
    return this.voornaam + " " + this.achternaam;
  },
};

const persoon2 = {
  voornaam: "Bart",
  achternaam: "Duisters",
  volledigeNaam: () => {
    return `${this.voornaam} ${this.achternaam}`;
  },
};

console.log(persoon.volledigeNaam());
console.log(persoon2.volledigeNaam());
```

Bovenstaande variabelen `persoon` en `persoon2` hebben beide een object toegekend gekregen. Beide objecten hebben drie properties (Nederlands: eigenschappen), namelijk `voornaam`, `achternaam` en `volledigeNaam`.

Ook al is de syntax verschillend voor het toekennen van een functie aan de property `volledigeNaam` en ook al is de syntax verschillend voor het teruggeven van de samengevoegde variabelen `voornaam` en `achternaam`, dit doet achterliggend identiek hetzelfde.

## this

```js
const persoon = {
  voornaam: "Bart",
  achternaam: "Duisters",
  volledigeNaam: () => {
    return `${this.voornaam} ${this.achternaam}`;
  },
};
```

In bovenstaand voorbeeld wordt er gebruik gemaakt van `this`. `this` verwijst naar `this object` (Nederlands: DIT object). `this` verwijst in bovenstaand voorbeeld naar de variabele `persoon`, er zou dus ook geschreven kunnen worden:

```js
const persoon = {
  voornaam: "Bart",
  achternaam: "Duisters",
  volledigeNaam: () => {
    return `${persoon.voornaam} ${persoon.achternaam}`;
  },
};
```

# class

Neem onderstaand voorbeeld, waar er drie objecten worden aangemaakt.
Elk object stelt een persoon voor. Elk object heeft twee properties,
namelijk voornaam en achternaam. Elk object heeft één methode,
namelijk 'volledigeNaam'.

Voor elke nieuwe persoon, moet elke property opnieuw getypt worden
en elke methode moet opnieuw volledig uitgetypt worden.

Stel dat elke persoon een nieuwe property krijgt, genaamd 'bijnaam'.
Dan zal in elk object apart de nieuwe property toegevoegd moeten worden.

Indien er tien objecten gemaakt zijn die een persoon voorstellen, betekent
dit dat er tien keer een property toegevoegd moet worden.

```js
const persoon = {
  voornaam: "John",
  achternaam: "Duck",
  volledigeNaam: () => {
    return `${this.voornaam} ${this.achternaam}`;
  },
};

const persoon2 = {
  voornaam: "Bart",
  achternaam: "Duisters",
  volledigeNaam: () => {
    return `${this.voornaam} ${this.achternaam}`;
  },
};

const persoon3 = {
  voornaam: "Mark",
  achternaam: "Duisters",
  volledigeNaam: () => {
    return `${this.voornaam} ${this.achternaam}`;
  },
};
```

Om te zorgen dat er niet voor elke persoon opnieuw een object met alle properties aangemaakt moet worden. Kan er een 'class' aangemaakt worden.

```js
class Persoon {
  voornaam = "Anoniempje";
  achternaam;

  volledigeNaam() {
    return `${this.voornaam} ${this.achternaam}`;
  }
}

const persoon = new Persoon();
persoon.voornaam = "John";
persoon.achternaam = "Duck";

const persoon2 = new Persoon();
persoon2.voornaam = "Bart";
persoon2.achternaam = "Duisters";

console.log(persoon.volledigeNaam());
console.log(persoon2.volledigeNaam());
```

Properties gedefinieerd binnen het codeblok van een `class`, worden gedefinieerd zonder `const` of `let`.
Functies (ook wel `methodes` genoemd) gedefinieerd binnen het codeblok van een `class`, worden gedefinieerd zonder sleutelwoord `function`.

Wat afgeleid kan worden uit bovenstaande code, is dat `new Persoon()`, een object teruggeeft, met de properties `voornaam`, `achternaam` en de methode `volledigeNaam`.
Met het sleutelwoord 'new' wordt er een nieuwe instantie gemaakt van de `class`, genaamd `Persoon`. Elke instantie van de `class` `Persoon` krijgt standaard een property `voornaam` met als standaardwaarde (Engels: default value) `'Anoniempje'`, een property `achternaam` zonder standaardwaarde (de waarde is dus `undefined`) en een methode `volledigeNaam()`.

Na het toekennen van een instantie van een `class` aan een variabele, kunnen de properties en methodes aangesproken worden alsof het een object is (omdat het achterliggend ook effectief een object is), met de puntnotatie. Dit wordt bijvoorbeeld gedaan om waarden toe te kennen aan `persoon.voornaam` en `persoon.achternaam`.

## constructor

Om te zorgen dat er niet altijd eerst een instantie aangemaakt moet worden om vervolgens de properties één voor één een waarde toe te kennen. Kan er een speciale methode gebruikt worden, de `constructor`-methode. Dit is een methode die aangeroepen wordt, op het moment dat een instantie van een object aangemaakt wordt.

```js
class Persoon {
  voornaam;
  achternaam;

  constructor() {
    /*
     * Code in dit codeblok wordt uitgevoerd op het moment
     * dat 'new Persoon()' wordt aangeroepen.
     */
    console.log("Ik word uitgevoerd");
  }

  volledigeNaam() {
    return `${this.voornaam} ${this.achternaam}`;
  }
}

const persoon = new Persoon(); // De constructor-methode wordt uitgevoerd
// 'Ik word uitgevoerd' wordt geprint

const persoon2 = new Persoon(); // De constructor-methode wordt uitgevoerd
// 'Ik word uitgevoerd wordt geprint
```

Aan deze speciale methode kunnen ook parameters meegegeven worden.

```js
class Persoon {
  voornaam;
  achternaam;

  constructor(parameter1, parameter2) {
    this.voornaam = parameter1;
    this.achternaam = parameter2;
  }

  volledigeNaam() {
    return `${this.voornaam} ${this.achternaam}`;
  }
}

const persoon = new Persoon("Bart", "Duisters");
console.log(persoon.volledigeNaam()); // Bart Duisters
```

## static

Soms is het interessant om geen instantie te moeten maken van een class en
toch de methodes aan te kunnen roepen. Hiervoor maken we gebruik van een
voorbeeld met een class genaamd 'Utils' (van het Engels 'utilities', Nederlands 'gereedschap').

```js
let a = 3;
let b = 4;
let grootsteGetal;

if (a > b) {
  grootsteGetal = a;
} else {
  grootsteGetal = b;
}
console.log(`Het grootste getal is: ${a}`);

a = 4;
b = 5;

if (a > b) {
  grootsteGetal = a;
} else {
  grootsteGetal = b;
}
console.log(`Het grootste getal is: ${b}`);
```

Er wordt twee keer hetzelfde gedaan, dit kan dus in een functie gestoken worden.

```js
function grootsteGetal(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

let a = 3;
let b = 4;
let grootsteGetal;

console.log(`Het grootste getal is: ${grootsteGetal(a, b)}`);

a = 4;
b = 5;

console.log(`Het grootste getal is: ${grootsteGetal(a, b)}`);
```

Op dit moment is er maar één JavaScript-bestand. Maar stel dat er in een nieuw
bestand opnieuw logica moet zijn om te bepalen wat het grootste getal is,
dan zou er opnieuw dezelfde functie geschreven moeten worden.

In plaats van altijd code/logica te schrijven op het moment dat er gekend
moet zijn welk nummer groter is, kan dit in een class gestoken worden als method.
Omdat dit vaak gebruikt moet worden, is het interessant om dit als static method
toe te voegen. Dit zorgt ervoor dat er geen instantie van de class gemaakt
moet worden om gebruik te maken van de method.

```js
// Gebruik even de verbeelding, Utils staat in een apart JavaScript-bestand.
class Utils {
  // Nieuw keyword: static
  // Dit maakt het mogelijk om de functie op te roepen via: Utils.grootsteGetal(a, b);
  static grootsteGetal(a, b) {
    if (a > b) {
      return a;
    }
    return b;
  }
}

// Opnieuw in de verbeelding, dit is het tweede JavaScript-bestand.
const a = 3,
  b = 5;
console.log(`Het grootste getal is: ${Utils.grootsteGetal(a, b)}`);

// Opnieuw in de verbeelding, dit is het derde JavaScript-bestand.
const x = 4,
  y = 6;
console.log(`Het grootste getal is: ${Utils.grootsteGetal(x, y)}`);
```
