/*
_________________________OEFENING 1_____________________________

Create a class that takes the following four arguments for a particular football player:

name
age
height
weight
Also, create three functions for the class that returns the following strings:

getAge() returns "name is age age"
getHeight() returns "name is heightcm"
getWeight() returns "name weighs weightkg"

Examples
 p1 = new Player("David Jones", 25, 175, 75)

 p1.getAge() ➞ "David Jones is age 25"
 p1.getHeight() ➞ "David Jones is 175cm"
 p1.getWeight() ➞ "David Jones weighs 75kg"

*/

class Player {
  name;
  age;
  height;
  weight;

  constructor(a, b, c, d) {
    this.name = a;
    this.age = b;
    this.height = c;
    this.weight = d;
  }

  getAge() {
    return `${this.name} is age ${this.age}`;
  }
  getHeight() {
    return `${this.name} is ${this.height} cm`;
  }
  getWeight() {
    return `${this.name} weighs ${this.weight} kg`;
  }
}

const p1 = new Player("Marvi Hendriks", 30, 175, 70);
const p2 = new Player("Domenico", 35, 180, 70);
const p3 = new Player("Marco", 28, 155, 55);

console.log(p1.getAge());
console.log(p3.getHeight());
console.log(p1.getWeight());
console.log(p2.getAge());
console.log(p1.getHeight());
console.log(p2.getWeight());

/*
___________________________OEFENING 2______________________________

Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

Form the fullname by simply joining the first and last name together, separated by a space.
Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.
Examples
emp1 = Employee("John", "Smith")
emp1.fullname ➞ "John Smith"

emp2 = Employee("Mary",  "Sue")
emp2.email ➞ "mary.sue@company.com"

-------------start met onderstaande code------------------

class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
	}
}
*/

class Employee {
  firstname;
  lastname;

  constructor(a, b) {
    this.firstname = a;
    this.lastname = b;
  }

  fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  email() {
    return `${this.firstname}.${this.lastname}@company.com`;
  }
}

const emp1 = new Employee("Marvi", "Hendriks");
const emp2 = new Employee("Domenico", "Marchese");
const emp3 = new Employee("Marco", "Deroeck");

console.log(emp1.fullname());
console.log(emp2.fullname());
console.log(emp2.email());
console.log(emp3.fullname());
console.log(emp3.email());
console.log(emp1.email());

/*
______________________________OEFENING 3___________________________

Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:

BasicPlan	StandardPlan	PremiumPlan
✓	           ✓            	✓	canStream
✓	           ✓	            ✓	canDownload
✓	          ✓             	✓	hasSD
✓	          ✓	                    hasHD
✓	                                hasUHD
1	          2	                 4	numOfDevices
$8.99	       $12.99	    $15.99	price


Examples
BasicPlan.hasSD ➞ true 

PremiumPlan.hasSD ➞ true

BasicPlan.hasUHD ➞ false

BasicPlan.price ➞ '$8.99'

PremiumPlan.numOfDevices ➞ 4
*/

class BasicPlan {
  static canStream = true;
  static canDownload = true;
  static numOfDevices = 1;
  static hasSD = true;
  static hasHD = true;
  static hasUHD = true;
  static price = "$8.99";
}

// Write the classes for StandardPlan and PremiumPlan here!

class StandardPlan extends BasicPlan {
  static numOfDevices = 2;
  static hasUHD = false;
  static price = "$12.99";
}

class PremiumPlan extends BasicPlan {
  static numOfDevices = 4;
  static hasHD = false;
  static hasUHD = false;
  static price = "$15.99";
}

console.log(BasicPlan.canDownload);
console.log(BasicPlan.hasUHD);
console.log(BasicPlan.numOfDevices);
console.log(StandardPlan.price);
console.log(StandardPlan.hasUHD);
console.log(StandardPlan.numOfDevices);
console.log(PremiumPlan.canStream);
console.log(PremiumPlan.hasUHD);
console.log(PremiumPlan.numOfDevices);

/*

Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

{other person name} is {older than / younger than / the same age as} me.

Examples
p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)

p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."

---------------------start with this code-----------------------

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		// Write code here!
		
	}
}

*/

class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (this.age < other.age) {
      return `${other.name} is older than ${this.name}.`;
    } else if (this.age > other.age) {
      return `${other.name} is younger than ${this.name}.`;
    } else {
      return `${other.name} is the same age as ${this.name}.`;
    }
  }
}

const p11 = new Person("Marvi", 30);
const p22 = new Person("Domenico", 41);
const p33 = new Person("Marco", 28);

console.log(p11.compareAge(p22));

console.log(p22.compareAge(p11));

console.log(p11.compareAge(p33));
