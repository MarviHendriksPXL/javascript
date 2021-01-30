//----------------OEFENING 1------------------

/*
Name Classes
Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

An attribute called fullname which returns the first and last names.
A attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
Remember to allow the attributes fname and lname to be accessed individually as well.

Examples
a1 = new Name("john", "SMITH")
a1.fname ➞ "John"

a1.lname ➞ "Smith"

a1.fullname ➞ "John Smith"

a1.initials ➞ "J.S"


Notes
Make sure only the first letter of each name is capitalised.
*/

class Name {
  fname;
  lname;

  constructor(a, b) {
    this.fname = a;
    this.lname = b;
  }

  fullname() {
    return `${this.fname} ${this.lname}`;
  }

  initials() {
    return `${this.fname[0]}.${this.lname[0]}`;
  }
}

const a1 = new Name("Marvi", "Hendriks");
const a2 = new Name("Marco", "Deroeck");
const a3 = new Name("Domenico", "Marchese");

console.log(a1.fullname());
console.log(a2.initials());
console.log(a3.lname);
//-------------OEFENING 2-----------------

/*
Book Shelf
Create a Book constructor that has two properties :

Title
Author
and two methods:

A method named getTitle that returns: "Title: " + the instance title.
A method named getAuthor that returns: "Author: " + the instance author.
and instantiate this constructor by creating 3 new books:

Pride and Prejudice - Jane Austen (PP)
Hamlet - William Shakespeare (H)
War and Peace - Leo Tolstoy (WP)
Name the new object instances PP, H, and WP, respectively.

For instance, if I instantiated the following book using this Book constructor function:

Harry Potter - J.K. Rowling (HP)
I would get the following properties and methods:

Examples
HP.title ➞ "Harry Potter"
HP.author ➞ "J.K. Rowling"
HP.getTitle() ➞ "Title: Harry Potter"
HP.getAuthor() ➞ "Author: J.K. Rowling"
*/

class Book {
  title;
  author;

  constructor(a, b) {
    this.title = a;
    this.author = b;
  }
  getTitle() {
    return `Title: ${this.title}`;
  }

  getAuthor() {
    return `Author: ${this.author}`;
  }
  // Write your properties and methods here
}

const book1 = new Book("Nerd van de klas", "Domenico Marchese");
const book2 = new Book("Under Earth", "Marvi Hendriks");
const book3 = new Book("De beste front end developer", "Marco Deroeck");
// Instantiate your Book constructor here

console.log(book1.getTitle());
console.log(book1.getAuthor());
console.log(book3.title);
console.log(book2.author);
//-------------------------------OEFENING 3-----------------------------------

/*
PvP Battle: Marvi vs Bart
Having gotten rather sick of always being paired together in sciency literature,
 Marvi and Bart have decided to finally settle their differences with a magical duel.
They'll each learn some skills and then battle it out.

Your Goal
Your job is to write the class Player which will handle all the combat mechanics.

Properties
Let's look at the Player class's properties first. You'll need:

A private health variable hp. Make sure it's private!
A private maxHealth variable maxHp. Again, make sure it's private.
A private energy variable en. Again, make sure it's private.
A private maxEnergy variable maxEn. You know the drill by now.
Getters and setters for health and energy:
These should be named hp and en, respectively.
They should be "capped". That is, you cannot have less than 0 health or energy
and your health and/or energy cannot be greater than their respective "max" values.
An armor value. This is public.
A name. This is also public.
A getter for health percent, called hpPerc. Please return this value rounded to two decimal places.
Now that that's out of the way, let's look at our single method (other than the aforementioned getters and setters):

learnSkill() Method
Your class must implement a single method called learnSkill.

Basics/Functionality
This method takes two parameters: a skill name (e.g., "fireball"), and an object containing skill statistics (more on that below!).

Most importantly, after adding a skill:

marvi.learnSkill("fireball",{ //stats (see below)})
you should then be able to call that skill as you'd normally call a method on your Player instance,
 with the target passed as a parameter:

marvi.fireball(bart);
where the name of the method is merely the skill name passed in. Keep in mind that some skills may have two-part names,
 so you'll need to factor that in when creating your method.

In general, using the skill should return a string describing what happened, 
as well as changing the relevant numbers on both the target and "caster".

stats Object
Your stats object has the following properties:

{
    damage: the raw damage done (assuming 0 effective armor),
    description: the description of the attack (for humans to read),
    penetration: Armor penetration amount (see "Armor" below),
    cost: Cost, in energy points,
    heal: Optional heal value (some skills heal the caster on cast!)
}
Logic
Armor: Your learnSkill method will start out by subtracting an armor penetration stat from the target's armor value to
 get an "effective armor" value. That is, if Marvi attacks Bart with a skill with 5 armor penetration
and Bart's armor is 50, then Bart's effective armor for this attack is 50-5 = 45.

Energy: If the skill costs more energy than the character currently has,
 return (player name) attempted to use (skill name), but didn't have enough energy!.
  Otherwise, subtract the energy cost from the character's energy, and continue.

Damage: Damage here is pretty easy. Consider that the minimum armor value is 0, the maximum is 100,
 and each percent effective armor decreases damage by one percent. An example:

Marvi attacks Bart for 50 damage. Bart's effective armor rating is 25.
Marvi does 50*((100-25)/100) = 37.5 damage.
Attack String: You'll need to return a string describing what happened.
 The first part of the returned string should describe the attack itself, and should look like this: 
 (attacking player name) used skill (skill name), (skill description), against (target name), doing (calculated damage) damage!. 
 For the damage calculation, please round your value to two decimal places.

Next, if the skill healed, append (attacking player name) healed for (heal amount) health..

Finally, if the target player died, append (target name) died.. Otherwise, append (target name is at (targ hpPerc) % health.

Return this string, and don't forget to actually apply the damage/health changes!

Example
const marvi = new Player("Marvi", 110, 50, 10)
const bart = new Player("Bart", 100, 60, 20)

Marvi.learnSkill("fireball", {
    damage: 23,
    penetration: 1.2,
    heal: 5,
    cost: 15,
    desc: "a firey magical attack"
})

console.log(Marvi.fireball(bob))
// Marvi used fireball, a firey magical attack, against Bart, doing
// 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.

bart.learnSkill("superbeam", {
  damage:200,
  penetration:50,
  heal:50,
  cost:75,
  desc: "an overpowered attack, pls nerf"
})

console.log(bart.superbeam(marvi))
// Bart attempted to use superbeam, but didn't have enough energy!
*/

class Player {
  #hp;
  #maxHp;
  #en;
  #maxEn;
  armor;
  name;
  hpPerc;

  constructor(name, maxHp, maxEn, armor) {
    this.name = name;
    this.armor = armor;
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.maxEn = maxEn;
    this.en = maxEn;
    this.armor = armor;
  }

  getHp() {
    return this.hp;
  }
  setHp(amount) {
    this.hp = amount < 0 ? 0 : amount;
    this.hpPerc = Math.round((this.hp / this.maxHp) * 100 * 100) / 100;
  }
  getEn() {
    return this.en;
  }
  setEn(amount) {
    this.en = amount < 0 ? 0 : amount;
  }

  skills = {};
  learnSkill(skillName, stats) {
    var fixedSkillName = skillName;
    this.skills[fixedSkillName] = stats;
    this[fixedSkillName] = function (target) {
      var skillStats = this.skills[skillName];
      // Energy
      if (skillStats.cost > this.getEn())
        return `${this.name} attempted to use ${skillName}, but didn't have enough energy!`;
      this.setEn(this.getEn() - skillStats.cost);

      // Armour
      var effectiveArmor = target.armor - skillStats.penetration;
      if (effectiveArmor < 0) effectiveArmor = 0;
      else if (effectiveArmor > 100) effectiveArmor = 100;

      // Damage
      var newHp = target.getHp();
      var damageAmount = ((100 - effectiveArmor) / 100) * skillStats.damage;
      newHp -= damageAmount;
      target.setHp(newHp);

      // Health
      this.setHp(this.getHp() + skillStats.heal);

      // Description
      var description = `${this.name} used ${skillName}, ${
        skillStats.desc
      }, against ${target.name}, doing ${
        Math.round(damageAmount * 100) / 100
      } damage!`;
      if (skillStats.heal > 0) {
        description += ` ${this.name} healed for ${skillStats.heal} health!`;
      }
      if (target.getHp() <= 0) {
        description += ` ${target.name} died. `;
      } else {
        description += ` ${target.name} is at ${target.hpPerc}% health.`;
      }
      return description;
    };
  }
}

const marvi = new Player("Marvi", 110, 50, 10);
const bart = new Player("Bart", 100, 60, 20);

marvi.learnSkill("fireball", {
  damage: 23,
  penetration: 1.2,
  heal: 5,
  cost: 15,
  desc: "a firey magical attack",
});
console.log(marvi.fireball(bart));

bart.learnSkill("superbeam", {
  damage: 200,
  penetration: 50,
  heal: 50,
  cost: 75,
  desc: "an overpowered attack, pls nerf",
});

console.log(bart.superbeam(marvi));

marvi.learnSkill("sudden death", {
  damage: 51,
  penetration: 2,
  heal: 15,
  cost: 5,
  desc: "tapping into the darkest powers of all",
});

console.log(marvi["sudden death"](bart));

bart.learnSkill("ultimate explosion", {
  damage: 98,
  penetration: 10,
  heal: 2,
  cost: 12,
  desc:
    "one of the biggest explosion of all time, even more powered than the big bang",
});

console.log(bart["ultimate explosion"](marvi));

marvi.learnSkill("finishing blow", {
  damage: 250,
  penetration: 50,
  heal: 50,
  cost: 5,
  desc:
    "he jumps up high and flips toward his opponent and slashed him in two pieces",
});

console.log(marvi["finishing blow"](bart));
