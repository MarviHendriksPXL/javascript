/*
# Class - extends & super

## Schrijven

### Oefening 1

#### Deel 1

Refactor onderstaande code zodat er gebruik gemaakt wordt van classes.
Zorg voor een class genaamd 'Cursist' en een class genaamd 'Docent'.


const cursist1 = {
    naam: 'Yoeri',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist2 = {
    naam: 'Marvi Hendriks',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist3 = {
    naam: 'Simone :P',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist4 = {
    naam: 'Domenico',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist5 = {
    naam: 'Marco',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist6 = {
    naam: 'Michelle',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist7 = {
    naam: 'Romy',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist8 = {
    naam: 'Jorg',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist9 = {
    naam: 'Tony $erneel$',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist10 = {
    naam: 'Ian',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist11 = {
    naam: 'Angelique',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist12 = {
    naam: 'Arne',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const docent1 = {
    naam: 'Bart',
    motto: '25 is grappiger dan 24',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`;
    },
    motto: () => {
        return `Mijn motto is: ${this.motto}`;
    }
}

const docent2 = {
    naam: 'Mark',
    motto: '24 is grappiger dan 25',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`;
    },
    motto: () => {
        return `Mijn motto is: ${this.motto}`;
    }
}
*/
class Persoon {
  naam;

  constructor(naam) {
    this.naam = naam;
  }

  begroeting() {
    return `Hallo, ik ben ${this.naam}!`;
  }
}

class Cursist extends Persoon {
  constructor(naam) {
    super(naam);
  }
}

class Docent extends Persoon {
  motto;

  constructor(naam, motto) {
    super(naam);
    this.motto = motto;
  }
  getMotto() {
    return `Mijn motto is: ${this.motto}`;
  }
}

const alleCursisten = [];
alleCursisten.push(new Cursist("Yoeri"));
alleCursisten.push(new Cursist("Marvi Hendriks"));
alleCursisten.push(new Cursist("Simone :P"));
alleCursisten.push(new Cursist("Domenico"));
alleCursisten.push(new Cursist("Marco"));
alleCursisten.push(new Cursist("Michelle"));
alleCursisten.push(new Cursist("Romy"));
alleCursisten.push(new Cursist("Jorg"));
alleCursisten.push(new Cursist("Tony"));
alleCursisten.push(new Cursist("Ian"));
alleCursisten.push(new Cursist("Angelique"));
alleCursisten.push(new Cursist("Arne"));

for (let i = 0; i < alleCursisten.length; i++) {
  console.log(alleCursisten[i].begroeting());
}

const alleDocenten = [];
alleDocenten.push(new Docent("bart", "24 is grappiger dan 25"));
alleDocenten.push(new Docent("Mark", "25 is grappiger dan 24"));
for (let i = 0; i < alleDocenten.length; i++) {
  console.log(alleDocenten[i].begroeting());
}

const cursist1 = new Cursist("Marvi Hendriks");
const cursist2 = new Cursist("Marco Deroeck");
const cursist3 = new Cursist("Domenico Marchese");
const docent1 = new Docent("Bart", "24 is grappiger dan 25");
const docent2 = new Docent("Mark", "25 is grappiger dan 24");

console.log(cursist1.begroeting());
console.log(cursist2.begroeting());
console.log(cursist3.begroeting());
console.log(docent1.begroeting());
console.log(docent1.getMotto());
console.log(docent2.begroeting());
console.log(docent2.getMotto());


