const cursisten1 = [
  { naam: "Yoeri" },
  { naam: "Marvi Hendriks" },
  { naam: "Simone :P" },
  { naam: "Domenico" },
  { naam: "Marco" },
  { naam: "Michelle" },
];

const cursisten2 = [
  { naam: "Romy" },
  { naam: "Jorg" },
  { naam: "Tony $erneel$" },
  { naam: "Ian" },
  { naam: "Angelique" },
  { naam: "Arne" },
];

// Gebruik een instantiemethode van Array om cursisten1 en cursisten2 samen te voegen,
// zodat er één array is, toegekend aan een nieuwe variabele genaamd 'cursisten',
// waarin alle cursisten aanwezig zijn.

const cursisten = cursisten1.concat(cursisten2);
console.log(cursisten);

const bewerkteCursisten = cursisten.map((x) => `Cursist: ${x.naam}`);
console.log(bewerkteCursisten);
bewerkteCursisten.forEach((cursist) => console.log(cursist));
