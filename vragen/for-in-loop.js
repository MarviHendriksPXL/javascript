let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

// Write your code below

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewMember in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
  );
}

/* hoe wordt er gekomen aan crewMember?? wordt deze gecreërd
door de for in loop?

Antwoord:
Dit is een 'for in' loop, deze heb je nog niet gezien.

for (let crewMember in spaceship.crew) {
  console.log(crewMember);
}

Is hetzelfde als

for (let i = 0; i < spaceship.crew.length; i++) {
  const crewMember = spaceship.crew[i];
  console.log(crewMember);
}

De for in loop, kent elke iteratie een nieuw object toe aan de variabele (in dit geval 'crewMember') en blijft dit herhalen
tot alle objecten in spaceship.crew afgehandeld zijn.
*/
