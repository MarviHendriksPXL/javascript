class Lijst {
  _lijst;

  constructor() {
    this._lijst = [];
  }

  get lengte() {
    return this._lijst.length;
  }

  set voegToe(item) {
    this._lijst[this._lijst.length] = item;
  }

  aanpassen(functie) {
    for (let i = 0; i < this.lengte; i++) {
      this._lijst[i] = functie(this._lijst[i]);
    }
  }

  get lijst() {
    return this._lijst;
  }
}

const nummers = new Lijst();

nummers.voegToe = 3;
nummers.voegToe = 1;
nummers.voegToe = 4;
nummers.voegToe = 1;
nummers.voegToe = 5;
nummers.voegToe = 9;
nummers.voegToe = 2;

function maalTwee(item) {
  return item * 2;
}
nummers.aanpassen(maalTwee);

for (let i = 0; i < nummers.lengte; i++) {
  console.log(nummers.lijst[i]);
}
