// Q 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greetings() {
    return `Hi team, we have a new member in the team. His name ${this.name}, his age is ${this.age} and he has interests in ${this.interests} .`;
  }

  farewell() {
    return `Thank you for your hard work and dedication, ${this.name}.`;
  }
}
const person1 = new Person("John", 25, "male", "Playing chess");
console.log(person1.greetings());
console.log(person1.farewell());
