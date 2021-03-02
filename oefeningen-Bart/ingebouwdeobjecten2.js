const studenten = [
  {
    naam: "Yoeri",
  },
  {
    naam: "Marvi Hendriks",
  },
  {
    naam: "Simone :P",
  },
  {
    naam: "Domenico",
  },
  {
    naam: "Marco",
  },
  {
    naam: "Michelle",
  },
  {
    naam: "Romy",
  },
  {
    naam: "Jorg",
  },
  {
    naam: "Tony $erneel$",
  },
  {
    naam: "Ian",
  },
  {
    naam: "Angelique",
  },
  {
    naam: "Arne",
  },
];

function filterCursisten(cursisten, letters) {
  /*
   * <eerste>
   * Herschrijf de code tussen de <eerste></eerste> comment.
   * Tip: Maak gebruik van .filter()
   */
  // const gefilterdeCursisten = studenten.filter((a) => (a.naam.includes("r")));

  const gefilterdeCursisten = cursisten.filter((a) =>
    a.naam.toLowerCase().includes(letters.toLowerCase())
  );

  /*
     * Omschrijf waarom .toLowerCase gebruikt wordt op zowel de naam als de letters

     de namen worden aangepast naar kleine letters en geen hoofdletters.
     bij de letters.tolowercase wordt dit ook toegepast voor als er hoofdletters worden meegegeven in de parameters
     */
  /* if (cursisten.naam.toLowerCase().includes(letters.toLowerCase())) {
    gefilterdeCursisten[gefilterdeCursisten.length] = cursisten;
  } */

  /*
   * </eerste>
   */
  return gefilterdeCursisten;
}

const cursistenMetEenR = filterCursisten(studenten, "r");
const cursistenMetCo = filterCursisten(studenten, "Co");

function logCursisten(letters, cursisten) {
  /*
   * <tweede>
   * Herschrijf de code tussen de <tweede></tweede> comment.
   * Tip: Maak gebruik van .map
   */
  let namen = cursisten.map((a) => a.naam);

  /* deze code heb ik vervangen door bovenstaande code
  let namen = [];
  for (let i = 0; i < cursisten.length; i++) {
    namen[i] = cursisten[i].naam;
  }
  */
  /*
   * </tweede>
   */

  /*
   * Omschrijf wat .join(', ') doet
   .join voegt de array samen in een string en de parameter weergeeft wat er tussen elke value komt.
   */
  namen = namen.join(", ");
  console.log(`Cursisten met ${letters.toLowerCase()} in de naam: ${namen}`);
}

logCursisten("r", cursistenMetEenR);
logCursisten("Co", cursistenMetCo);
