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
