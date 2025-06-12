// Q 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.

// Ans.
class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    return `Hi team, we have a new member in the team. His name is ${this.name}, he is ${this.age} years old, and his interests include ${this.interests.join(', ')}.`;
  }

  farewell() {
    return `Thank you for your hard work and dedication, ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, age, gender, interests, studies) {
    super(name, age, gender, interests);
    this.studies = studies;
  }

  greeting() {
    const greetString = super.greeting();
    return `${greetString} This student is studying ${this.studies}. He is good at communication and very dedicated.`;
  }
}

const student1 = new Student("John", 25, "male", ['chess', 'online games', 'coding'], "English");
console.log(student1.greeting());
