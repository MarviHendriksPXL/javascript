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
      console.log(this._lijst[i]);
    }
  }
}
const nummers = new Lijst();

nummers.voegToe = 10;
nummers.voegToe = 1;
console.log(nummers.aanpassen(2));
