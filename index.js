let zile = 500;

let ani = Math.floor(zile / 365);
zile %= 365;
let luni = Math.floor(zile / 30);
zile %= 30;
let saptamini = Math.floor(zile / 7);
zile %= 7;

let mesaj;
if (ani > 0) {
  mesaj = `Timpul pina la finalizarea productiei: ${ani} ani ${luni} luni`;
} else if (saptamini > 0) {
  mesaj = `${luni} luni ${saptamini} saptamini`;
} else if (zile > 0) {
  mesaj = `${saptamini} saptamini ${zile} zile`;
} else {
  mesaj = "mai putin de o saptamina";
}

console.log(mesaj);

//////////////////////
const persoane = [
  { nume: "Ana", hobby: "citit" },
  { nume: "Ion", hobby: "pescuit" },
  { nume: "Maria", hobby: "gradinarit" },
  { nume: "Dan", hobby: "jocuri" },
  { nume: "Elena", hobby: "desen" },
];

const numeCautat = "Ana";
const persoana = persoane.find((p) => p.nume === numeCautat);

const mesaj1 = persoana
  ? `Hobby-ul lui ${numeCautat} este ${persoana.hobby}`
  : "Nume inexistent";
console.log(mesaj1);

////////////////////
const descrieri = {
  primavara: "Primavara este plina de viata si culoare.",
  vara: "Vara este calda si insorita.",
  toamna: "Toamna este racoroasa si plina de frunze aurii.",
  iarna: "Iarna este rece si adesea ninge.",
};

const anotimpCautat = "toamna";
const descriere = descrieri[anotimpCautat] || "Nu este denumire de anotimp";
console.log(descriere);

////////////////
class Animal {
  constructor(picioare, areCoada) {
    this.picioare = picioare;
    this.areCoada = areCoada;
  }
}
class Pisica extends Animal {
  constructor(rasa) {
    super(4, "da");
    this.rasa = rasa;
  }
}
class Caine extends Animal {
  constructor(rasa) {
    super(4, "da");
    this.rasa = rasa;
  }
}
const pisica1 = new Pisica("Britanica");
console.log(pisica1);
const caine1 = new Caine("Labrador");
console.log(caine1);
