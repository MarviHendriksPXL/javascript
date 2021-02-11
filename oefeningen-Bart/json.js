const cursisten = [
  { naam: "Yoeri" },
  { naam: "Marvi Hendriks" },
  { naam: "Simone :P" },
  { naam: "Domenico" },
  { naam: "Marco" },
  { naam: "Michelle" },
  { naam: "Romy" },
  { naam: "Jorg" },
  { naam: "Tony $erneel$" },
  { naam: "Ian" },
  { naam: "Angelique" },
  { naam: "Arne" },
];

const docenten = [
  { naam: "Bart", motto: "25 is grappiger dan 24" },
  { naam: "Mark", motto: "24 is grappiger dan 25" },
  { naam: "Marvi", motto: "Marco snapt het niet" },
];

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
for (let i = 0; i < cursisten.length; i++) {
  alleCursisten.push(new Cursist(cursisten[i].naam));
}

for (let i = 0; i < cursisten.length; i++) {
  console.log(alleCursisten[i].begroeting());
}

const alleDocenten = [];
for (let i = 0; i < docenten.length; i++) {
  alleDocenten.push(new Docent(docenten[i].naam, docenten[i].motto));
}

for (let i = 0; i < docenten.length; i++) {
  console.log(alleDocenten[i].begroeting());
  console.log(alleDocenten[i].getMotto());
}
