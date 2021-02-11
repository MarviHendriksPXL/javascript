/*
1.
We want a data structure to store the information about our team. 
Create an empty team object.

2.
Our team has players, and the team plays games. We want to represent both of these. 
Add two properties to your team object. A _players property and a _games property that are both initialized to empty arrays.

3.
Populate the empty array that corresponds to the _players key in your team object with three actual players.
They should be in the following format:

{
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
}
You should put each player on a new line to prevent the line from getting too long.

4.
Populate the empty array that corresponds to the _games key in your object with three actual games. They should be in the following format:

{
  opponent: 'Broncos',
  teamPointss: 42,
  opponentPoints: 27
}

5.
Create getter methods for your _players and _games keys. You do not need to create setter methods, 
because we don’t want anyone to change the values saved to these keys.

6.
We want to add a new player to your team. Add a method addPlayer to your team object.
This method should take in three parameters: firstName, lastName, and age. 
It should create a player object, and add them to the team‘s players array.

7.
Below your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76.
Print out the team‘s players to check they were all properly added.

8.
The scorekeeper has some new information for us! Add a similar method for recording game results called addGame that:

takes in an opponent’s name,
your team’s points,
the opponent’s points,
creates a game object,
adds the game object to your team‘s games array.

9.
Invoke your addGame method on three games and print the team‘s updated games array.
*/

const team = {
  _players: [
    { firstName: "Marvi", lastName: "Hendriks", age: 30 },
    { firstName: "Marco", lastName: "DeRoeck", age: 28 },
    { firstName: "Domenico", lastName: "Marchese", age: 39 },
  ],
  _games: [
    {
      opponent: "Genk",
      teamPointss: 30,
      opponentPoints: 20,
    },
    {
      opponent: "Anderlecht",
      teamPointss: 30,
      opponentPoints: 25,
    },
    {
      opponent: "Brugge",
      teamPointss: 30,
      opponentPoints: 33,
    },
  ],

  getPlayers() {
    return this._players;
  },

  getGames() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.getPlayers());

team.addGame("the jefkes", 30, 50);
team.addGame("the jefkes", 30, 70);
console.log(team.getGames());
